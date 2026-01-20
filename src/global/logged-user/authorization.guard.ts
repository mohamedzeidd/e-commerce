import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PERMISSIONS } from '../constants/permissions.contant';
import { Request } from 'express';
import { NotAllowedException } from '../exceptions/not-allowed.exception';

export class AuthorizationGuard implements CanActivate {
  permission: PERMISSIONS;
  constructor(permission: PERMISSIONS) {
    this.permission = permission;
  }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    if (!request.loggedUser?.permissions.includes(this.permission))
      throw new NotAllowedException(request.language);

    return true;
  }
}
