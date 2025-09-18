import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_CoachController } from './lesson_coach.controller';
import { Lesson_CoachService } from './lesson_coach.service';

describe('LessonCoachController', () => {
  let controller: Lesson_CoachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lesson_CoachController],
      providers: [Lesson_CoachService],
    }).compile();

    controller = module.get<Lesson_CoachController>(Lesson_CoachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
