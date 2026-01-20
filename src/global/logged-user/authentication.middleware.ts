import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Request } from 'express';
import { Role } from 'src/modules/roles/entities/role.entity';
import { Repository } from 'typeorm';
import { Roles } from '../constants/roles.constant';
import { UnauthenticatedException } from '../exceptions/unauthenticated.exception';
import { v4 } from 'uuid';
import { JwtPayload } from './logged-user.interface';
@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(Role)
    private readonly roleRepo: Repository<Role>,
  ) {}

  async use(req: Request, res: any, next: (err?: any) => void) {
    const authHeader = req.headers['authorization']?.split(' ');
    if (!authHeader || authHeader.length == 0) {
      const ok = await this.setGuestUser(req);
      if (!ok) return next(new UnauthenticatedException());
      return next();
    }

    if (authHeader[0] !== 'Bearer' || !authHeader[1])
      return next(new UnauthenticatedException());
    const token = authHeader[1];

    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token);
    } catch (error) {
      return next(new UnauthenticatedException());
    }
    if (!payload) return next(new UnauthenticatedException());

    const role = await this.roleRepo.findOne({
      where: { key: payload.role, isDeleted: false },
      // Add cache here
    });
    if (!role) return next(new UnauthenticatedException());

    req.loggedUser = {
      id: payload.id,
      role: payload.role,
      isActive: payload.isActive,
      isBlocked: payload.isBlocked,
      defCountry: payload.defCountry,
      permissions: role.permissions,
    };

    next();
  }

  async setGuestUser(req: Request): Promise<boolean> {
    const role = await this.roleRepo.findOne({
      where: { key: Roles.GUEST, isDeleted: false },
      // Add cache here
    });

    if (!role) return false;

    req.loggedUser = {
      id: v4(),
      role: Roles.GUEST,
      isActive: false,
      isBlocked: false,
      permissions: role.permissions,
    };
    return true;
  }
}
