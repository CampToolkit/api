import { Test, TestingModule } from '@nestjs/testing';
import { DbCoachService } from './db-coach.service';

describe('CoachService', () => {
  let service: DbCoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCoachService],
    }).compile();

    service = module.get<DbCoachService>(DbCoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
