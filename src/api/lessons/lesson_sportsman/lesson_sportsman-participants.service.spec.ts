import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_SportsmanService } from './lesson_sportsman.service';

describe('LessonSportsmanParticipantsService', () => {
  let service: Lesson_SportsmanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lesson_SportsmanService],
    }).compile();

    service = module.get<Lesson_SportsmanService>(Lesson_SportsmanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
