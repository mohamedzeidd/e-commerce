import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import type { Job } from 'bull';
import { AuditLoggerService } from 'src/modules/audit-logger/audit-logger.service';
import { AuditMethod } from 'src/modules/audit-logger/constants/audit-logger.constant';
import { AuditLogger } from 'src/modules/audit-logger/entities/audit-logger.entity';

export interface CreateAuditLogJob {
  method: AuditMethod;
  module: string;
  action: string;
  message: string;
  userId?: string;
  targetId?: string;
}

export interface BulkCreateAuditLogJob {
  auditLogs: CreateAuditLogJob[];
}

@Processor('audit-logger')
export class AuditLoggerProcessor {
  private readonly logger = new Logger(AuditLoggerProcessor.name);

  constructor(private readonly auditLoggerService: AuditLoggerService) {}

  @Process('create')
  async handleCreate(job: Job<CreateAuditLogJob>) {
    this.logger.debug(`Processing audit log creation job ${job.id}`);

    try {
      const { method, module, action, message, userId, targetId } = job.data;

      const auditLog = await this.auditLoggerService.create({
        method,
        module,
        action,
        message,
        userId,
        targetId,
      } as AuditLogger);
      this.logger.debug(`Audit logger created succsessfully ${auditLog.id}`);
    } catch (error) {
      this.logger.debug(`Failder to create audit log:`);
      console.log(error);
    }
  }

  @Process('bulk-create')
  async handleBulkCreate(job: Job<BulkCreateAuditLogJob>) {
    this.logger.debug(`Processing bulk audit log creation job ${job.id}`);

    try {
      const { auditLogs } = job.data;
      const results: Array<{ index: number; success: boolean; auditLogId: string }> = [];
      const errors: Array<{ index: number; error: string; data: CreateAuditLogJob }> = [];

      for (let i = 0; i < auditLogs.length; i++) {
        try {
          const auditLogData = auditLogs[i];
          const auditLog = await this.auditLoggerService.create({
            method: auditLogData.method,
            module: auditLogData.module,
            action: auditLogData.action,
            message: auditLogData.message,
            userId: auditLogData.userId,
            targetId: auditLogData.targetId,
          } as AuditLogger);

          results.push({
            index: i,
            success: true,
            auditLogId: auditLog.id,
          });
        } catch (error: any) {
          errors.push({
            index: i,
            error: (error as Error)?.message || 'Unknown error',
            data: auditLogs[i],
          });
          this.logger.error(`Failed to create audit log at index ${i}:`);
          this.logger.error(error);
        }
      }

      this.logger.debug(`Bulk audit log creation completed. Success: ${results.length}, Errors: ${errors.length}`);

      return {
        success: true,
        totalProcessed: auditLogs.length,
        successful: results.length,
        failed: errors.length,
        results,
        errors,
      };
    } catch (error: any) {
      this.logger.error('Failed to process bulk audit log creation:');
      this.logger.error(error);
      throw error;
    }
  }
}
