import { Test, TestingModule } from '@nestjs/testing';
import { RbActivityTypeService } from './rb-activity-type.service';

describe('RbActivityTypeService', () => {
  let service: RbActivityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbActivityTypeService],
    }).compile();

    service = module.get<RbActivityTypeService>(RbActivityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
