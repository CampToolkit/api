import { Test, TestingModule } from '@nestjs/testing';
import { DbLesson_GroupService } from './db-lesson_group.service';

describe('LessonGroupParticipantsService', () => {
  let service: DbLesson_GroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbLesson_GroupService],
    }).compile();

    service = module.get<DbLesson_GroupService>(DbLesson_GroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
