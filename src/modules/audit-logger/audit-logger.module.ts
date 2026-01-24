import { Module } from '@nestjs/common';
import { AuditLoggerService } from './audit-logger.service';
import { AuditLoggerController } from './audit-logger.controller';
import { AuditLoggerQueueService } from 'src/bullmq/audit-logger-queue.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLogger } from './entities/audit-logger.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuditLogger , User])],
  controllers: [AuditLoggerController],
  providers: [AuditLoggerService],
  exports: [AuditLoggerService],
})
export class AuditLoggerModule {}
