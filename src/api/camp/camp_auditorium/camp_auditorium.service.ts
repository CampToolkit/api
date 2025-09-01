import { Injectable } from '@nestjs/common';
import { DbCamp_AuditoriumService } from '../../../db/services/camps/camp_auditorium/db-camp_auditorium.service';

@Injectable()
export class Camp_AuditoriumService {
  constructor(private dbCamp_AuditoriumService: DbCamp_AuditoriumService) {}

  create(campId: number, auditoriumIds: number[]) {
    return this.dbCamp_AuditoriumService.addAuditoriumToCamp(
      campId,
      auditoriumIds,
    );
  }

  findAll(campId: number) {
    return this.dbCamp_AuditoriumService.findAll(campId);
  }

  remove(campId: number, auditoriumIds: number[]) {
    return this.dbCamp_AuditoriumService.removeAuditoriumFromCamp(
      campId,
      auditoriumIds,
    );
  }
}
