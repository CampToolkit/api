import { Test, TestingModule } from '@nestjs/testing';
import { DbCampService } from './db-camp.service';

describe('CampService', () => {
  let service: DbCampService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbCampService],
    }).compile();

    service = module.get<DbCampService>(DbCampService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
