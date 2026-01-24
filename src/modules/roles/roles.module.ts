import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { PermissionsController } from './permissions.controller';
import { PermissionsService } from './permissions.service';
import { AuditLoggerQueueService } from 'src/bullmq/audit-logger-queue.service';
import { BullMQModule } from 'src/bullmq/bullmq.module';

@Module({
  imports:[TypeOrmModule.forFeature([Role]) , BullMQModule],
  controllers: [RolesController , PermissionsController],
  providers: [RolesService , PermissionsService],
})
export class RolesModule {}
