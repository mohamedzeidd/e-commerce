import { ERR_CODES, ErrCodes } from '../constants/error-codes.constant';
import { HttpStatus } from '@nestjs/common';
import { CustomException } from './custom-exception';
import { LanguageCodes } from '../constants/language-codes.constants';



export class NotAllowedException extends CustomException {
  errorCode: ERR_CODES;
  constructor(
    lang: LanguageCodes = LanguageCodes.English,
    errorCode: ERR_CODES = ERR_CODES.NOT_ALLOWED,
  ) {
    super(ErrCodes[errorCode][lang], HttpStatus.FORBIDDEN);
    this.errorCode = errorCode;
  }

  serialize(): { statusCode: number; errorCode: ERR_CODES; message: string } {
    return {
      statusCode: HttpStatus.FORBIDDEN,
      errorCode: this.errorCode,
      message: this.message,
    };
  }
}
