import { Test, TestingModule } from '@nestjs/testing';
import { DbActivityTypeService } from './db-activity-type.service';

describe('ActivityTypeService', () => {
  let service: DbActivityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbActivityTypeService],
    }).compile();

    service = module.get<DbActivityTypeService>(DbActivityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
