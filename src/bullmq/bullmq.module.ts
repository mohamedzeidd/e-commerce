import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { QueueEvents } from './processors/queue-events.constants';
import { AuditLoggerModule } from 'src/modules/audit-logger/audit-logger.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuditLoggerProcessor } from './processors/audit-logger.processor';
import { AuditLoggerQueueService } from './audit-logger-queue.service';
import { User } from 'src/modules/users/entities/user.entity';
import { env } from 'src/config/env';

@Module({
  imports: [
    BullModule.forRootAsync({
      useFactory: () => {
        const redisUrl = env().redis.url;
        if (!redisUrl) throw new Error('REDIS_URI is missing in .env');

        const url = new URL(redisUrl);
        return {
          redis: {
            host: url.hostname,
            port: parseInt(url.port || '6379'),
            password: url.password || undefined,
            username: url.username || undefined,
            tls: url.protocol === 'rediss:' ? {} : undefined,
          },
          defaultJobOptions: {
            removeOnComplete: 100,
            removeOnFail: 50,
            attempts: 3,
            backoff: { type: 'exponential', delay: 2000 },
          },
          settings: { stalledInterval: 30000, maxStalledCount: 1 },
        };
      },
    }),
    BullModule.registerQueue({ name: QueueEvents.DEFAULT_QUEUE }),
    BullModule.registerQueue({ name: QueueEvents.EMAIL_QUEUE }),
    BullModule.registerQueue({ name: QueueEvents.AUDIT_LOGGER_QUEUE }),
    BullModule.registerQueue({ name: QueueEvents.NOTIFICATION_QUEUE }),
    BullModule.registerQueue({ name: QueueEvents.ALERT_QUEUE }),
    BullModule.registerQueue({ name: QueueEvents.COMPLAINT_ESCALATION_QUEUE }),
    AuditLoggerModule,
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuditLoggerProcessor, AuditLoggerQueueService],
  exports: [AuditLoggerQueueService],
})
export class BullMQModule {}
