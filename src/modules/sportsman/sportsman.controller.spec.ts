import { Test, TestingModule } from '@nestjs/testing';
import { SportsmanController } from './sportsman.controller';
import { SportsmanService } from './sportsman.service';

describe('SportsmanController', () => {
  let controller: SportsmanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SportsmanController],
      providers: [SportsmanService],
    }).compile();

    controller = module.get<SportsmanController>(SportsmanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
