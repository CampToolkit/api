import { Injectable } from '@nestjs/common';
import { DbCoachService } from '../../db/services/coach/db-coach.service';

@Injectable()
export class CoachService {
  constructor(private dbCoachService: DbCoachService) {}

  create(params: { lastName: string; firstName: string; patrName: string }) {
    return this.dbCoachService.create(params);
  }

  findAll() {
    return this.dbCoachService.findAll();
  }

  findOne(id: number) {
    return this.dbCoachService.findOne(id);
  }

  update(
    id: number,
    params: {
      lastName?: string;
      firstName?: string;
      patrName?: string;
    },
  ) {
    return this.dbCoachService.update(id, params);
  }

  remove(id: number) {
    return this.dbCoachService.remove(id);
  }
}
