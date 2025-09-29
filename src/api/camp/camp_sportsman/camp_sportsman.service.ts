import { Injectable } from '@nestjs/common';

import { DbCamp_SportsmanService } from '../../../db/db-module/camps/camp_sportsman/db-camp_sportsman.service';
import { EntityIncludes } from '../../../db/db-module/shared/types/entity-includes.type';
import { Sportsman } from '../../../db/db-module/persons/sportsman/sportsman.entity';

@Injectable()
export class Camp_SportsmanService {
  constructor(private dbCamp_SportsmanService: DbCamp_SportsmanService) {}

  create(campId: number, sportsmanIds: number[]) {
    return this.dbCamp_SportsmanService.addSportsmenToCamp(
      campId,
      sportsmanIds,
    );
  }

  remove(campId: number, sportsmanIds: number[]) {
    return this.dbCamp_SportsmanService.removeSportsmenFromCamp(
      campId,
      sportsmanIds,
    );
  }

  findAll(campId: number, params?: { includes?: EntityIncludes<Sportsman>[] }) {
    return this.dbCamp_SportsmanService.findAll(campId, params);
  }
}
