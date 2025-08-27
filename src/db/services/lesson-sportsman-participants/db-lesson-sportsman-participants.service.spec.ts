import { Test, TestingModule } from '@nestjs/testing';
import { DbLesson_SportsmanParticipantsService } from './db-lesson_sportsman-participants.service';

describe('DbLessonSportsmanParticipantsService', () => {
  let service: DbLesson_SportsmanParticipantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLesson_SportsmanParticipantsService],
    }).compile();

    service = module.get<DbLesson_SportsmanParticipantsService>(
      DbLesson_SportsmanParticipantsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
