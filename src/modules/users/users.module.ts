import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';
import { BcryptService } from 'src/global/bcrypt/bcrypt.service';
import { UtilsService } from './utiles.service';
import { BullMQModule } from 'src/bullmq/bullmq.module';
import { AttachementsModule } from '../attachements/attachements.module';

@Module({
  imports: [TypeOrmModule.forFeature([User, Verification]) , BullMQModule , AttachementsModule],
  controllers: [UsersController, AuthController],
  providers: [UsersService, AuthService, BcryptService, UtilsService],
})
export class UsersModule {}
