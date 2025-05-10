import { Injectable } from '@nestjs/common';
import { LoggerServices } from './common/logger/logger.service';

@Injectable()
export class AppService {
  constructor(private  logger: LoggerServices) {} // Inject LoggerService

  getHello(): string {
    this.logger.log('Hello world endpoint was hit!');
    this.logger.warn('This is a warning message!');
    this.logger.error('This is an error message!', 'Error stack trace');
    this.logger.debug('Debugging...');

    return 'Hello World!';
  }
}
