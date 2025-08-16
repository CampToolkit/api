import { Test, TestingModule } from '@nestjs/testing';
import { DbSportsmanService } from './db-sportsman.service';

describe('DbSportsmanService', () => {
  let service: DbSportsmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbSportsmanService],
    }).compile();

    service = module.get<DbSportsmanService>(DbSportsmanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
