import { Test, TestingModule } from '@nestjs/testing';
import { DbPracticeGroup_SportsmanService } from './db-practice-group_sportsman.service';

describe('DbPracticeGroupSportsmanService', () => {
  let service: DbPracticeGroup_SportsmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbPracticeGroup_SportsmanService],
    }).compile();

    service = module.get<DbPracticeGroup_SportsmanService>(
      DbPracticeGroup_SportsmanService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
