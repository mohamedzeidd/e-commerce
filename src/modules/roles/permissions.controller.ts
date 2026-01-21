import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { FindPermissionsDto } from './dto/find-permissions.dto';
import { GetUser } from 'src/global/logged-user/get-user.decorator';
import type { LoggedUser } from 'src/global/logged-user/logged-user.interface';

@Controller('permissions')
@UseGuards(AuthenticationGuard)
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @Get()
  @UseGuards(new AuthorizationGuard(PERMISSIONS.read_permissions))
  findAll(@Query() query: FindPermissionsDto) {
    return this.permissionsService.getAllPermissions(query);
  }

  @Get('/logged-user')
  @UseGuards(new AuthorizationGuard(PERMISSIONS.read_permissions))
  getUserPermissions(@GetUser() loggedUser:LoggedUser) {
    return this.permissionsService.getUserPermissions(loggedUser)
  }
}
