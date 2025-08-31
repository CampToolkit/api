import { Test, TestingModule } from '@nestjs/testing';
import { DbLesson_CoachService } from './db-lesson_coach.service';

describe('DbLessonCoachService', () => {
  let service: DbLesson_CoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLesson_CoachService],
    }).compile();

    service = module.get<DbLesson_CoachService>(DbLesson_CoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
