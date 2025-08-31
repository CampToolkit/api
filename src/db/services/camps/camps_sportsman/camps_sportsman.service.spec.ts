import { Test, TestingModule } from '@nestjs/testing';
import { DbCamp_SportsmanService } from './db-camp_sportsman.service';

describe('CampsSportsmanService', () => {
  let service: DbCamp_SportsmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCamp_SportsmanService],
    }).compile();

    service = module.get<DbCamp_SportsmanService>(DbCamp_SportsmanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
