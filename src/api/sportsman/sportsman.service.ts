import { Injectable, Logger } from '@nestjs/common';
import { DbSportsmanService } from '../../db/db-module/persons/sportsman/db-sportsman.service';
import { EntityIncludes } from '../../db/db-module/shared/types/entity-includes.type';
import { Sportsman } from '../../db/db-module/persons/sportsman/sportsman.entity';

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

  createMany(
    params: {
      lastName: string;
      firstName: string;
      patrName: string;
      birthDate?: string;
    }[],
  ) {
    return this.dbSportsmanService.createMany(params);
  }

  findAll(params?: { includes?: EntityIncludes<Sportsman>[] }) {
    return this.dbSportsmanService.findAll(params);
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
