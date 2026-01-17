import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { GetLanguage } from 'src/global/language/get-language.decorator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(
    @Body() registerDto: RegisterDto,
    @GetLanguage() language: LanguageCodes,
  ) {
    return this.authService.register(registerDto, language);
  }


  @Post("login")
  @HttpCode(HttpStatus.OK)
  login(@Body()loginDto:LoginDto , @GetLanguage() language:LanguageCodes){
    return this.authService.login(loginDto , language)
  }

}
