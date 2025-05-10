import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class RedisController {
  @EventPattern('user_created')
  handleUserCreated(@Payload() data: any) {
    console.log('Received user_created event:', data);
    // Do background processing here
  }
}
