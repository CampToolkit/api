import { Test, TestingModule } from '@nestjs/testing';
import { RbActivityTypeController } from './rb-activity-type.controller';
import { RbActivityTypeService } from './rb-activity-type.service';

describe('RbActivityTypeController', () => {
  let controller: RbActivityTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbActivityTypeController],
      providers: [RbActivityTypeService],
    }).compile();

    controller = module.get<RbActivityTypeController>(RbActivityTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
