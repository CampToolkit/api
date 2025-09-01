import { Injectable } from '@nestjs/common';
import { DbCoachService } from '../../db/services/coach/db-coach.service';

interface CoachParams {
  lastName: string;
  firstName: string;
  patrName: string;
}

@Injectable()
export class CoachService {
  constructor(private dbCoachService: DbCoachService) {}

  create(params: CoachParams) {
    return this.dbCoachService.create(params);
  }

  createMany(params: CoachParams[]) {
    return this.dbCoachService.createMany(params);
  }

  findAll() {
    return this.dbCoachService.findAll();
  }

  findOne(id: number) {
    return this.dbCoachService.findOne(id);
  }

  update(id: number, params: Partial<CoachParams>) {
    return this.dbCoachService.update(id, params);
  }

  remove(id: number) {
    return this.dbCoachService.remove(id);
  }
}
