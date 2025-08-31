import { Test, TestingModule } from '@nestjs/testing';
import { DbCamp_CoachService } from './db-camp_coach.service';

describe('DbCampCoachService', () => {
  let service: DbCamp_CoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCamp_CoachService],
    }).compile();

    service = module.get<DbCamp_CoachService>(DbCamp_CoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
