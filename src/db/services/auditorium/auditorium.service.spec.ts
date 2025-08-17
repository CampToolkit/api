import { Test, TestingModule } from '@nestjs/testing';
import { DbAuditoriumService } from './db-auditorium.service';

describe('AuditoriumService', () => {
  let service: DbAuditoriumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbAuditoriumService],
    }).compile();

    service = module.get<DbAuditoriumService>(DbAuditoriumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
