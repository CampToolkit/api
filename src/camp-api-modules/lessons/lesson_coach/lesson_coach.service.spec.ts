import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_CoachService } from './lesson_coach.service';

describe('LessonCoachService', () => {
  let service: Lesson_CoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lesson_CoachService],
    }).compile();

    service = module.get<Lesson_CoachService>(Lesson_CoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
