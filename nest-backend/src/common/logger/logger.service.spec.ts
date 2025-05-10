import { Test, TestingModule } from '@nestjs/testing';
import { LoggerServices } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoggerServices],
    }).compile();

    service = module.get<LoggerServices>(LoggerServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
