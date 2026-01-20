import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { UnauthenticatedException } from '../exceptions/unauthenticated.exception';
import { NotAllowedException } from '../exceptions/not-allowed.exception';
import { ERR_CODES } from '../constants/error-codes.constant';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (!request.loggedUser?.id)
      throw new UnauthenticatedException(request.language);
    if (request.loggedUser.isBlocked)
      throw new NotAllowedException(request.language, ERR_CODES.USER_BLOCKED);
    return true;
  }
}
