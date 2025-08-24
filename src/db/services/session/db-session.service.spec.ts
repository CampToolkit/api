import { Test, TestingModule } from '@nestjs/testing';
import { DbSessionService } from './db-session.service';

describe('DbSessionService', () => {
  let service: DbSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbSessionService],
    }).compile();

    service = module.get<DbSessionService>(DbSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
