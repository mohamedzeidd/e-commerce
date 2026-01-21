import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';

@Module({
  imports:[TypeOrmModule.forFeature([Role])],
  controllers: [RolesController , PermissionsController],
  providers: [RolesService , PermissionsService],
})
export class RolesModule {}
