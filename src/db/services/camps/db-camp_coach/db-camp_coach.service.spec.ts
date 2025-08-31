import { Test, TestingModule } from '@nestjs/testing';
import { DbCampCoachService } from './db-camp_coach.service';

describe('DbCampCoachService', () => {
  let service: DbCampCoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCampCoachService],
    }).compile();

    service = module.get<DbCampCoachService>(DbCampCoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
