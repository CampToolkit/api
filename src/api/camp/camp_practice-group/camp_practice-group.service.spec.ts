import { Test, TestingModule } from '@nestjs/testing';
import { CampPracticeGroupService } from './camp_practice-group.service';

describe('CampPracticeGroupService', () => {
  let service: CampPracticeGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampPracticeGroupService],
    }).compile();

    service = module.get<CampPracticeGroupService>(CampPracticeGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
