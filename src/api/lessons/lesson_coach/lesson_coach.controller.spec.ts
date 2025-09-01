import { Test, TestingModule } from '@nestjs/testing';
import { LessonCoachController } from './lesson_coach.controller';
import { Lesson_CoachService } from './lesson_coach.service';

describe('LessonCoachController', () => {
  let controller: LessonCoachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonCoachController],
      providers: [Lesson_CoachService],
    }).compile();

    controller = module.get<LessonCoachController>(LessonCoachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
