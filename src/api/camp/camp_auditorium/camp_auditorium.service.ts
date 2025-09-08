import { Injectable } from '@nestjs/common';
import { DbCamp_AuditoriumService } from '../../../db/db-module/camps/camp_auditorium/db-camp_auditorium.service';

@Injectable()
export class Camp_AuditoriumService {
  constructor(private dbCamp_AuditoriumService: DbCamp_AuditoriumService) {}

  createMany(campId: number, auditoriumIds: number[]) {
    return this.dbCamp_AuditoriumService.addManyAuditoriumToCamp(
      campId,
      auditoriumIds,
    );
  }

  findAll(campId: number) {
    return this.dbCamp_AuditoriumService.findAll(campId);
  }

  remove(campId: number, auditoriumIds: number[]) {
    return this.dbCamp_AuditoriumService.removeManyAuditoriumFromCamp(
      campId,
      auditoriumIds,
    );
  }
}
