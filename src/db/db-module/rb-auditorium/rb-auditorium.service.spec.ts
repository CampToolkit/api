import { Test, TestingModule } from '@nestjs/testing';
import { DbRbAuditoriumService } from './db-rb-auditorium.service';

describe('RbAuditoriumService', () => {
  let service: DbRbAuditoriumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbRbAuditoriumService],
    }).compile();

    service = module.get<DbRbAuditoriumService>(DbRbAuditoriumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
