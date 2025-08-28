import { Test, TestingModule } from '@nestjs/testing';
import { DbRbActivityTypeService } from './db-rb-activity-type.service';

describe('RbActivityTypeService', () => {
  let service: DbRbActivityTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbRbActivityTypeService],
    }).compile();

    service = module.get<DbRbActivityTypeService>(DbRbActivityTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
