import { Transform } from 'class-transformer';
import { IsEmail, IsEnum, IsOptional, IsString, IsUUID } from 'class-validator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';

export class CreateUserDto {
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  phoneNumber?: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value?.trim())
  name?: string;

  // @IsOptional()
  // @IsUUID('4')
  // profileImage?: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsEnum(LanguageCodes)
  defLanguage?: LanguageCodes;

  @IsString()
  role: string;
}
