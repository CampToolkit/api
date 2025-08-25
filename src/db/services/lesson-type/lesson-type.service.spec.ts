import { Test, TestingModule } from '@nestjs/testing';
import { DbLessonTypeService } from './db-lesson-type.service';

describe('SlotTypeService', () => {
  let service: DbLessonTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLessonTypeService],
    }).compile();

    service = module.get<DbLessonTypeService>(DbLessonTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
