import { Injectable } from '@nestjs/common';
import { DbCamp_CoachService } from '../../../db/db-module/camps/camp_coach/db-camp_coach.service';

@Injectable()
export class Camp_CoachService {
  constructor(private readonly dbCamp_CoachService: DbCamp_CoachService) {}

  create(id: number, coachIds: number[]) {
    return this.dbCamp_CoachService.addCoachesToCamp(id, coachIds);
  }

  findAll(id: number) {
    return this.dbCamp_CoachService.findAll(id);
  }

  remove(id: number, coachIds: number[]) {
    return this.dbCamp_CoachService.removeCoachesFromCamp(id, coachIds);
  }
}
