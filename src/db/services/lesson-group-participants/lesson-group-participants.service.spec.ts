import { Test, TestingModule } from '@nestjs/testing';
import { LessonGroupParticipantsService } from './lesson-group-participants.service';

describe('LessonGroupParticipantsService', () => {
  let service: LessonGroupParticipantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LessonGroupParticipantsService],
    }).compile();

    service = module.get<LessonGroupParticipantsService>(LessonGroupParticipantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
