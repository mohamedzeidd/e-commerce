import { Module } from '@nestjs/common';
import { AttachementsService } from './attachements.service';
import { AttachementsController } from './attachements.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attachement } from './entities/attachement.entity';
import { BullMQModule } from 'src/bullmq/bullmq.module';

@Module({
  imports: [TypeOrmModule.forFeature([Attachement]), BullMQModule],
  controllers: [AttachementsController],
  providers: [AttachementsService],
  exports: [AttachementsService],
})
export class AttachementsModule {}
