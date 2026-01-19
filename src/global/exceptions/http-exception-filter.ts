import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  UnprocessableEntityException,
  NotFoundException,
  Logger,
} from '@nestjs/common';
import { CustomException } from './custom-exception';
import { Request, Response } from 'express';
import { ERR_CODES, ErrCodes } from 'src/global/constants/error-codes.constant';
import { QueryFailedError } from 'typeorm';
// import { ThrottlerException } from '@nestjs/throttler';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    if (exception instanceof CustomException) {
      const newResponse = exception.serialize();
      response.status(newResponse.statusCode).json(newResponse);
    } else if (exception instanceof UnprocessableEntityException) {
      response
        .status(HttpStatus.UNPROCESSABLE_ENTITY)
        .json(exception.getResponse());
    } else if (exception instanceof NotFoundException) {
      response.status(HttpStatus.NOT_FOUND).json({
        statusCode: HttpStatus.NOT_FOUND,
        errorCode: ERR_CODES.ROUTE_NOT_FOUND,
        message: 'Route not found',
      });
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    else if (
      exception instanceof QueryFailedError &&
      (exception as any).code === '23505'
    ) {
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: ERR_CODES.ENTITY_ALREADY_EXISTS,
        message: ErrCodes[ERR_CODES.ENTITY_ALREADY_EXISTS][request.language],
      });
    } else if (exception instanceof QueryFailedError) {
      this.logger.error(exception);
      response.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        errorCode: ERR_CODES.FAILED_UPDATE_DATA,
        message: exception.message,
      });
    }
    //  else if (exception instanceof ThrottlerException) {
    //   response.status(HttpStatus.TOO_MANY_REQUESTS).json({
    //     statusCode: HttpStatus.TOO_MANY_REQUESTS,
    //     message: ErrCodes[ERR_CODES.TOO_MANY_REQUESTS][request.language],
    //   });
    // }
    else {
      this.logger.error(exception);
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: exception.message,
      });
    }
  }
}
