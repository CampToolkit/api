import { Test, TestingModule } from '@nestjs/testing';
import { DbLessonCoachService } from './db-lesson_coach.service';

describe('DbLessonCoachService', () => {
  let service: DbLessonCoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLessonCoachService],
    }).compile();

    service = module.get<DbLessonCoachService>(DbLessonCoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
