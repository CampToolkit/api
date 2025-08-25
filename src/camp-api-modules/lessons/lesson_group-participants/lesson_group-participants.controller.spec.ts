import { Test, TestingModule } from '@nestjs/testing';
import { LessonGroupParticipantsController } from './lesson_group-participants.controller';
import { LessonGroupParticipantsService } from './lesson_group-participants.service';

describe('LessonGroupParticipantsController', () => {
  let controller: LessonGroupParticipantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonGroupParticipantsController],
      providers: [LessonGroupParticipantsService],
    }).compile();

    controller = module.get<LessonGroupParticipantsController>(LessonGroupParticipantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
