import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { BadRequestException } from 'src/global/exceptions/bad-request.exception';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { ERR_CODES } from 'src/global/constants/error-codes.constant';
import { BcryptService } from 'src/global/bcrypt/bcrypt.service';
import { AuditLoggerQueueService } from 'src/bullmq/audit-logger-queue.service';
import { AuditMethod } from '../audit-logger/constants/audit-logger.constant';
import { ENTITY_USER } from 'src/global/constants/entities.constant';
import { AttachementsService } from '../attachements/attachements.service';
import { NotFoundException } from 'src/global/exceptions/not-found.exception';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    private readonly bcryptService: BcryptService,
    private readonly auditLoggerQueueService: AuditLoggerQueueService,
    private readonly attachementsService: AttachementsService,
  ) {}

  async findLoggedUserById(id: string) {
    const user = await this.userRepo.findOne({
      where: { id },
      relations: {
        profileImage: true,
      },
      select: {
        id: true,
        name: true,
        defLanguage: true,
        email: true,
        emailVerified: true,
        phoneNumber: true,
        profileImage: {
          id: true,
        },
        roleKey: true,
      },
    });
    if (!user) return null;
    return user ;
  }

  async findLoggedUserProfile(loggedUser: LoggedUser) {
    return await this.findLoggedUserById(loggedUser.id!);
  }

  async createUser(createUserDto: CreateUserDto, loggedUser: LoggedUser, language: LanguageCodes) {
    const existingUser = await this.userRepo.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existingUser) throw new BadRequestException(language, ERR_CODES.EMAIL_ALREADY_EXISTS);

    if (createUserDto.phoneNumber) {
      const userWithPhoneNumber = await this.userRepo.findOne({
        where: {
          phoneNumber: createUserDto.phoneNumber,
        },
      });
      if (userWithPhoneNumber) throw new BadRequestException(language, ERR_CODES.PHONE_NUMBER_ALREADY_EXISTS);
    }
    const tempPassword = createUserDto.password || (Math.random() * 1000000).toString(16).slice(-8);
    const hashedPassword = await this.bcryptService.hash(tempPassword);

    const user = this.userRepo.create({
      ...createUserDto,
      password: hashedPassword,
      defLanguage: createUserDto.defLanguage || LanguageCodes.English,
      emailVerified: true,
      role: { key: createUserDto.role },
      verification: {},
    });

    const newUser = await this.userRepo.save(user);

    this.auditLoggerQueueService.addAuditLog(
      AuditMethod.INSERT,
      ENTITY_USER,
      'create',
      `User created with ID: ${newUser.id}`,
      loggedUser.id,
      newUser.id,
    );
    return {
      message: 'User created successfully',
      profile: await this.findLoggedUserProfile({ id: newUser.id } as LoggedUser),
    };
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async updateUserImage(id: string, image: Express.Multer.File, loggedUser: LoggedUser, language: LanguageCodes) {
    const user = await this.findLoggedUserById(id);
    if (!user) throw new NotFoundException(language);

    if (!image) throw new BadRequestException(language, ERR_CODES.IMAGE_NOT_FOUND);

    const attachement = await this.attachementsService.uploadFile(image, loggedUser, language);

    await this.userRepo.update(id, { profileImage: attachement });
    return this.findLoggedUserById(id);
  }


 

}
