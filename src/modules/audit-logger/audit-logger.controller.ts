import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AuditLoggerService } from './audit-logger.service';

import { AuthenticationGuard } from 'src/global/logged-user/authentication.guard';
import { AuthorizationGuard } from 'src/global/logged-user/authorization.guard';
import { PERMISSIONS } from 'src/global/constants/permissions.contant';
import { AuditLogQueryDto } from './dto/audit-log-query.dto';

@Controller('audit-logger')
@UseGuards(AuthenticationGuard)
@UseGuards(new AuthorizationGuard(PERMISSIONS.read_audit_logs))
export class AuditLoggerController {
  constructor(private readonly auditLoggerService: AuditLoggerService) {}

  @Get()
  findAll(@Query() queryDto: AuditLogQueryDto) {
    return this.auditLoggerService.findAll(queryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditLoggerService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string) {
  //   return this.auditLoggerService);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditLoggerService.remove(+id);
  }
}
