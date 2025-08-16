import { Test, TestingModule } from '@nestjs/testing';
import { PraciteGroupService } from './pracite-group.service';

describe('PraciteGroupService', () => {
  let service: PraciteGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PraciteGroupService],
    }).compile();

    service = module.get<PraciteGroupService>(PraciteGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
