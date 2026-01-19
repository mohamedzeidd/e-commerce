import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { BcryptService } from 'src/global/bcrypt/bcrypt.service';
import { Verification } from './entities/verification.entity';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import {
  DEFAULT_LANGUAGE,
  LanguageCodes,
} from 'src/global/constants/language-codes.constants';
import { ERR_CODES, ErrCodes } from 'src/global/constants/error-codes.constant';
import { UtilsService } from './utiles.service';
import { env } from 'src/config/env';
import { DataSource } from 'typeorm';
import { VerificationReason } from './constants/user.constant';
import { LoginDto } from './dto/login.dto';
import { Roles } from 'src/global/constants/roles.constant';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
    private readonly bcryptService: BcryptService,
    private readonly jwtService: JwtService,
    private readonly dataSource: DataSource,
    @InjectRepository(Verification)
    private readonly verificationRepo: Repository<Verification>,
    private readonly usersService: UsersService,
    private readonly utilsService: UtilsService,
  ) {}

  async register(registerDto: RegisterDto, language: LanguageCodes) {
    const existingUser = await this.userRepo.findOne({
      where: [{ email: registerDto.email }],
    });

    if (existingUser)
      throw new BadRequestException({
        code: ERR_CODES.EMAIL_ALREADY_EXISTS,
        message:
          ErrCodes[ERR_CODES.EMAIL_ALREADY_EXISTS][language] ||
          ErrCodes[ERR_CODES.EMAIL_ALREADY_EXISTS]['en'],
      });

    if (registerDto.phoneNumber) {
      const userWithPhoneExists = await this.userRepo.findOne({
        where: {
          phoneNumber: registerDto.phoneNumber,
        },
      });
      if (userWithPhoneExists)
        throw new BadRequestException(
          ErrCodes[ERR_CODES.PHONE_NUMBER_ALREADY_EXISTS][language] ||
            ErrCodes[ERR_CODES.PHONE_NUMBER_ALREADY_EXISTS]['en'],
        );
    }

    const hashedPassword = await this.bcryptService.hash(registerDto.password);
    const verificationCode = this.utilsService.getVerificationCode();
    const verificationExpireAt = new Date(
      Date.now() + env().auth.activationCodeExpireIn * 1000,
    );

    const result = await this.dataSource.transaction(
      async (entityManager: EntityManager) => {
        const user = this.userRepo.create({
          ...registerDto,
          password: hashedPassword,
          role: { key: Roles.CUSTOMER },
          defLanguage: registerDto.defLanguage || DEFAULT_LANGUAGE,
        });
        const savedUser = await entityManager.save(User, user);

        const verification = this.verificationRepo.create({
          user: savedUser,
          verificationCode,
          verificationExpireAt,
          verificationReason: VerificationReason.EMAIL_VERIFICATION,
        });
        await entityManager.save(Verification, verification);

        const accessToken = await this.utilsService.generateAccessToken({
          id: savedUser.id,
          role: savedUser.role.key,
          isActive: savedUser.isActive,
          isBlocked: savedUser.isBlocked,
          defCountry: savedUser.defCountry,
        });

        const refreshToken =
          await this.utilsService.generateRefreshToken(savedUser);
        await entityManager.update(User, savedUser.id, { token: refreshToken });

        return { savedUser, accessToken, refreshToken };
      },
    );

    //TODO Send Email Verification with bullmq

    return {
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      profile: await this.usersService.findLoggedUserById(result.savedUser.id),
      accessTokenExpiresAt: new Date(
        Date.now() + env().jwt.accessExpireIn * 1000,
      ),
      refreshTokenExpiresAt: new Date(
        Date.now() + env().jwt.refreshExpireIn * 1000,
      ),
    };
  }

  async login(loginDto: LoginDto, language: LanguageCodes) {
    const user = await this.userRepo.findOne({
      where: {
        email: loginDto.email,
      },
      relations: { role: true },
    });

    if (!user) {
      throw new BadRequestException({
        code: ERR_CODES.INVALID_CREDENTIALS,
        message:
          ErrCodes[ERR_CODES.INVALID_CREDENTIALS][language] ||
          ErrCodes[ERR_CODES.INVALID_CREDENTIALS]['en'],
      });
    }

    const isPasswordValid = await this.bcryptService.compare(
      loginDto.password,
      user.password,
    );
    if (!isPasswordValid) {
      throw new BadRequestException({
        code: ERR_CODES.INVALID_CREDENTIALS,
        message:
          ErrCodes[ERR_CODES.INVALID_CREDENTIALS][language] ||
          ErrCodes[ERR_CODES.INVALID_CREDENTIALS]['en'],
      });
    }

    // Update FCM token if provided
    if (loginDto.fcmToken) {
      await this.userRepo.update(user.id, {
        fcmToken: loginDto.fcmToken,
      });
      user.fcmToken = loginDto.fcmToken;
    }

    // Generate tokens
    const accessToken = await this.utilsService.generateAccessToken({
      id: user.id,
      role: user.role.key,
      isActive: user.isActive,
      isBlocked: user.isBlocked,
      defCountry: user.defCountry,
    });

    let refreshToken = user.token;
    if (!refreshToken) {
      refreshToken = await this.utilsService.generateRefreshToken(user);
      await this.userRepo.update(user.id, { token: refreshToken });
    }

    return {
      profile: await this.usersService.findLoggedUserById(user.id),
      accessToken,
      refreshToken,
      accessWillExpireIn: new Date(
        Date.now() + env().jwt.accessExpireIn * 1000,
      ),
      refreshWillExpireIn: new Date(
        Date.now() + env().jwt.refreshExpireIn * 1000,
      ),
    };
  }
}
