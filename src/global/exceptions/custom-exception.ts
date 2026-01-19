import { ERR_CODES } from '../constants/error-codes.constant';
import { HttpException } from '@nestjs/common';

export abstract class CustomException extends HttpException {
  abstract errorCode: ERR_CODES;
  abstract serialize(): {
    statusCode: number;
    errorCode: ERR_CODES;
    message: string;
  };
}
