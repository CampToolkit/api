import { Test, TestingModule } from '@nestjs/testing';
import { RbAuditoriumController } from './rb-auditorium.controller';
import { RbAuditoriumService } from './rb-auditorium.service';

describe('RbAuditoriumController', () => {
  let controller: RbAuditoriumController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RbAuditoriumController],
      providers: [RbAuditoriumService],
    }).compile();

    controller = module.get<RbAuditoriumController>(RbAuditoriumController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
