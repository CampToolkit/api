import { Test, TestingModule } from '@nestjs/testing';
import { PraciteGroupController } from './pracite-group.controller';
import { PracticeGroupService } from './practice-group.service';

describe('PraciteGroupController', () => {
  let controller: PraciteGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PraciteGroupController],
      providers: [PracticeGroupService],
    }).compile();

    controller = module.get<PraciteGroupController>(PraciteGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
