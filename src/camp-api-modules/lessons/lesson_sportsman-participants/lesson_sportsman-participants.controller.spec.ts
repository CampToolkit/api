import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_SportsmanController } from './lesson__sportsman_controller';
import { Lesson_SportsmanService } from './lesson_-sportsman.service';

describe('LessonSportsmanParticipantsController', () => {
  let controller: Lesson_SportsmanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lesson_SportsmanController],
      providers: [Lesson_SportsmanService],
    }).compile();

    controller = module.get<Lesson_SportsmanController>(
      Lesson_SportsmanController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
