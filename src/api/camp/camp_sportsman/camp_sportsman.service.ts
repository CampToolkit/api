import { Injectable } from '@nestjs/common';

import { DbCamp_SportsmanService } from '../../../db/services/camps/camp_sportsman/db-camp_sportsman.service';

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

  findAll(campId: number) {
    return this.dbCamp_SportsmanService.findAll(campId);
  }
}
