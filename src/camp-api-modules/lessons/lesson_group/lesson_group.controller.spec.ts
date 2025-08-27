import { Test, TestingModule } from '@nestjs/testing';
import { Lesson_GroupController } from './lesson_group.controller';
import { Lesson_GroupService } from './lesson_group.service';

describe('LessonGroupParticipantsController', () => {
  let controller: Lesson_GroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Lesson_GroupController],
      providers: [Lesson_GroupService],
    }).compile();

    controller = module.get<Lesson_GroupController>(Lesson_GroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
