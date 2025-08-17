import { Test, TestingModule } from '@nestjs/testing';
import { DbSlotTypeService } from './db-slot-type.service';

describe('SlotTypeService', () => {
  let service: DbSlotTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbSlotTypeService],
    }).compile();

    service = module.get<DbSlotTypeService>(DbSlotTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
