import { Test, TestingModule } from '@nestjs/testing';
import { RbAuditoriumService } from './rb-auditorium.service';

describe('RbAuditoriumService', () => {
  let service: RbAuditoriumService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RbAuditoriumService],
    }).compile();

    service = module.get<RbAuditoriumService>(RbAuditoriumService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
