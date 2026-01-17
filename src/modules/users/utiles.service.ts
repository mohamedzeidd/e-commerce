import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { env } from 'src/config/env';
import { JwtPayload } from 'src/global/logged-user/logged-user.interface';
import { User } from './entities/user.entity';

@Injectable()
export class UtilsService {
  constructor(private readonly jwtService: JwtService) {}

  public getVerificationCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  public async generateAccessToken(payload: JwtPayload) {
    return await this.jwtService.signAsync(payload, {
      expiresIn: env().jwt.accessExpireIn,
    });
  }

  public async generateRefreshToken({ id }: User) {
    return await this.jwtService.signAsync({ id }, { expiresIn: env().jwt.refreshExpireIn });
  }


}
