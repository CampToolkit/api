import { Test, TestingModule } from '@nestjs/testing';
import { LessonTypeController } from './lesson-type.controller';
import { LessonTypeService } from './lesson-type.service';

describe('LessonTypeController', () => {
  let controller: LessonTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LessonTypeController],
      providers: [LessonTypeService],
    }).compile();

    controller = module.get<LessonTypeController>(LessonTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
