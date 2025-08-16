import { Test, TestingModule } from '@nestjs/testing';
import { DbPracticeGroupService } from './db-practice-group.service';

describe('DbPracticeGroupService', () => {
  let service: DbPracticeGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbPracticeGroupService],
    }).compile();

    service = module.get<DbPracticeGroupService>(DbPracticeGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
