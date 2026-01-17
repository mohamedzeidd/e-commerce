import { Module } from '@nestjs/common';
import { AttachementsService } from './attachements.service';
import { AttachementsController } from './attachements.controller';

@Module({
  controllers: [AttachementsController],
  providers: [AttachementsService],
})
export class AttachementsModule {}
