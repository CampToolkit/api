import { Test, TestingModule } from '@nestjs/testing';
import { PracticeGroupService } from './practice-group.service';

describe('PraciteGroupService', () => {
  let service: PracticeGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PracticeGroupService],
    }).compile();

    service = module.get<PracticeGroupService>(PracticeGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
