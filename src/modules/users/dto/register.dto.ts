import { Transform } from 'class-transformer';
import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { LanguageCodes } from 'src/global/constants/language-codes.constants';

export class RegisterDto {
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @Transform(({ value }: { value: string }) =>
    value?.toLocaleLowerCase().trim(),
  )
  email: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @IsOptional()
  @IsPhoneNumber(undefined, { message: 'Please provide a valid phone number' })
  phoneNumber?: string;

  @IsOptional()
  @IsEnum(LanguageCodes, { message: 'Invalid language code' })
  defLanguage?: LanguageCodes;

  @IsOptional()
  @IsString()
  fcmToken?: string;
}
