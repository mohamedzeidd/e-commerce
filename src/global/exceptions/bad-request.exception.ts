import { ERR_CODES, ErrCodes } from '../constants/error-codes.constant';
import { HttpStatus } from '@nestjs/common';
import { LanguageCodes } from '../constants/language-codes.constants';
import { CustomException } from './custom-exception';

export class BadRequestException extends CustomException {
  errorCode: ERR_CODES;
  constructor(
    lang: LanguageCodes = LanguageCodes.English,
    errorCode: ERR_CODES = ERR_CODES.BAD_REQUEST,
  ) {
    super(ErrCodes[errorCode][lang], HttpStatus.NOT_FOUND);
    this.errorCode = errorCode;
  }

  serialize(): { statusCode: number; errorCode: ERR_CODES; message: string } {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}
