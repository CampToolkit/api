import { Test, TestingModule } from '@nestjs/testing';
import { PracticeGroupController } from './practice-group.controller';
import { PracticeGroupService } from './practice-group.service';

describe('PraciteGroupController', () => {
  let controller: PracticeGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PracticeGroupController],
      providers: [PracticeGroupService],
    }).compile();

    controller = module.get<PracticeGroupController>(PracticeGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
