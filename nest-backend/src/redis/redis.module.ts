import { Module } from '@nestjs/common';
import { RedisController } from './redis.controller';
import { RedisService } from './redis.service';

@Module({
  controllers: [RedisController],
  providers: [RedisService],
})
export class RedisModule {}
