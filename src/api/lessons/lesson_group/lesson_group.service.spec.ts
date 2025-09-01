import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_GroupService } from './lesson_group.service';

describe('LessonGroupParticipantsService', () => {
  let service: Lesson_GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Lesson_GroupService],
    }).compile();

    service = module.get<Lesson_GroupService>(Lesson_GroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
