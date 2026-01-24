import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import type { Queue } from 'bull';
import { AuditMethod } from 'src/modules/audit-logger/constants/audit-logger.constant';
import { BulkCreateAuditLogJob, CreateAuditLogJob } from './processors/audit-logger.processor';

@Injectable()
export class AuditLoggerQueueService {
  constructor(
    @InjectQueue('audit-logger')
    private readonly auditLoggerQueue: Queue,
  ) {}

  async addAuditLog(
    method: AuditMethod,
    module: string,
    action: string,
    message: string,
    userId?: string,
    targetId?: string,
    options?: {
      priority?: number;
      delay?: number;
      attempts?: number;
    },
  ) {
    const jobData: CreateAuditLogJob = {
      method,
      module,
      action,
      message,
      userId,
      targetId,
    };
    const jobOptions = {
      priority: options?.priority || 0,
      delay: options?.delay || 0,
      attempts: options?.attempts || 3,
      removeOnComplete: 100,
      removeOnFail: 50,
    };
    const job = await this.auditLoggerQueue.add('create', jobData, jobOptions);

    return {
      jobId: job.id,
      status: 'queued',
      message: 'Audit log job added to queue.',
    };
  }

  async addBulkAuditLogs(
    auditLogs: Array<{
      method: AuditMethod;
      module: string;
      action: string;
      message: string;
      userId?: string;
      targetId?: string;
    }>,
    options?: {
      priority?: number;
      delay?: number;
      attempts?: number;
    },
  ) {
    const jobData: BulkCreateAuditLogJob = {
      auditLogs,
    };

    const jobOptions = {
      priority: options?.priority || 0,
      delay: options?.delay || 0,
      attempts: options?.attempts || 3,
      removeOnComplete: 50,
      removeOnFail: 25,
    };

    const job = await this.auditLoggerQueue.add('bulk-create', jobData, jobOptions);

    return {
      jobId: job.id,
      status: 'queued',
      message: `Bulk audit log job added to queue with ${auditLogs.length} logs`,
      totalLogs: auditLogs.length,
    };
  }
}
