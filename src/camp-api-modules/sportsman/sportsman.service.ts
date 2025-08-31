import { Injectable, Logger } from '@nestjs/common';
import { DbSportsmanService } from '../../db/services/db-sportsman/db-sportsman.service';

@Injectable()
export class SportsmanService {
  constructor(private readonly dbSportsmanService: DbSportsmanService) {}

  logger = new Logger('SportsmanService');

  create(params: {
    lastName: string;
    firstName: string;
    patrName: string;
    birthDate?: string;
  }) {
    return this.dbSportsmanService.create(params);
  }

  findAll() {
    return this.dbSportsmanService.findAll();
  }

  findOne(id: number) {
    return this.dbSportsmanService.findOne(id);
  }

  update(
    id: number,
    params: Partial<{
      lastName: string;
      firstName: string;
      patrName: string;
      birthDate: string;
    }>,
  ) {
    return this.dbSportsmanService.update(id, params);
  }

  remove(id: number) {
    return this.dbSportsmanService.remove(id);
  }
}
