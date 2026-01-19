import { ERR_CODES, ErrCodes } from '../constants/error-codes.constant';
import { HttpStatus } from '@nestjs/common';
import { CustomException } from './custom-exception';
import { LanguageCodes } from '../constants/language-codes.constants';

export class UnauthenticatedException extends CustomException {
  errorCode: ERR_CODES;
  constructor(
    lang: LanguageCodes = LanguageCodes.English,
    errorCode: ERR_CODES = ERR_CODES.UNAUTHENTICATED,
  ) {
    super(ErrCodes[errorCode][lang], HttpStatus.UNAUTHORIZED);
    this.errorCode = errorCode;
  }

  serialize(): { statusCode: number; errorCode: ERR_CODES; message: string } {
    return {
      statusCode: HttpStatus.UNAUTHORIZED,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}
