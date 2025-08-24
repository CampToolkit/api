import { Test, TestingModule } from '@nestjs/testing';
import { DbLessonService } from './db-lesson.service';

describe('LessonService', () => {
  let service: DbLessonService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLessonService],
    }).compile();

    service = module.get<DbLessonService>(DbLessonService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
