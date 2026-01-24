import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { env } from 'src/config/env';
import { QueueEvents } from './processors/queue-events.constants';
import { AuditLoggerModule } from 'src/modules/audit-logger/audit-logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLoggerProcessor } from './processors/audit-logger.processor';
import { AuditLoggerQueueService } from './audit-logger-queue.service';
import { User } from 'src/modules/users/entities/user.entity';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: new URL(env().redis.url).hostname,
        port: parseInt(new URL(env().redis.url).port),
        password: new URL(env().redis.url).password || undefined,
        username: new URL(env().redis.url).username || undefined,
        tls: new URL(env().redis.url).protocol === 'rediss:' ? {} : undefined,
      },
      defaultJobOptions: {
        removeOnComplete: 100,
        removeOnFail: 50,
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 2000,
        },
      },
      settings: {
        stalledInterval: 30000,
        maxStalledCount: 1,
      },
    }),
    BullModule.registerQueue({
      name: QueueEvents.DEFAULT_QUEUE,
    }),
    BullModule.registerQueue({
      name: QueueEvents.EMAIL_QUEUE,
    }),
    BullModule.registerQueue({
      name: QueueEvents.AUDIT_LOGGER_QUEUE,
    }),
    BullModule.registerQueue({
      name: QueueEvents.NOTIFICATION_QUEUE,
    }),
    BullModule.registerQueue({
      name: QueueEvents.ALERT_QUEUE,
    }),
    BullModule.registerQueue({
      name: QueueEvents.COMPLAINT_ESCALATION_QUEUE,
    }),
    AuditLoggerModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuditLoggerProcessor, AuditLoggerQueueService],
  exports: [BullMQModule, AuditLoggerQueueService],
})
export class BullMQModule {}
