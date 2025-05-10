import { Module } from '@nestjs/common';
import { LoggerServices } from './logger.service';

@Module({
  providers: [LoggerServices],
  exports: [LoggerServices]
})
export class LoggerModule {}
