import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { GetLanguage } from 'src/global/language/get-language.decorator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { LoginDto } from './dto/login.dto';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { GetUser } from 'src/global/logged-user/get-user.decorator';
import * as loggedUserInterface from 'src/global/logged-user/logged-user.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerImageConfig } from '../attachements/attachements.controller';
import { IdParamsDto } from '../../global/validators/id-params.dto';
import type { LoggedUser } from 'src/global/logged-user/logged-user.interface';
import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() registerDto: RegisterDto, @GetLanguage() language: LanguageCodes) {
    return this.authService.register(registerDto, language);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() loginDto: LoginDto, @GetLanguage() language: LanguageCodes) {
    return this.authService.login(loginDto, language);
  }

  @Patch('/profile-image')
  @UseGuards(new AuthorizationGuard(PERMISSIONS.update_profile_image))
  @UseInterceptors(FileInterceptor('profile-image', multerImageConfig))
  updateProfileImage(
    @UploadedFile() profileImage: Express.Multer.File,
    @GetUser() loggedUser: loggedUserInterface.LoggedUser,
    @GetLanguage() language: LanguageCodes,
  ) {
    return this.authService.updateProfileImage(profileImage, loggedUser, language);
  }

  @Get('/profile-image')
  @UseGuards(AuthenticationGuard)
  getProfileImage(@GetLanguage() language: LanguageCodes, @GetUser() loggedUser: LoggedUser) {
    return this.authService.getProfileImage(loggedUser, language);
  }
}
