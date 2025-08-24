import { Injectable } from '@nestjs/common';
import { DbSessionService } from '../../db/services/session/db-session.service';

@Injectable()
export class SessionService {
  constructor(private readonly dbSessionService: DbSessionService) {}

  create(params: {
    startDate: string;
    endDate: string;
    campId: number;
    practiceGroupId: number;
    activityTypeId: number;
    slotTypeId: number;
    auditoriumId: number;
  }) {
    return this.dbSessionService.create(params);
  }

  findAll(campId: number) {
    return this.dbSessionService.findAll(campId);
  }

  findOne(id: number) {
    return this.dbSessionService.findOne(id);
  }

  update(
    id: number,
    params: {
      startDate?: string;
      endDate?: string;
      practiceGroupId?: number;
      activityTypeId?: number;
      slotTypeId?: number;
      auditoriumId?: number;
    },
  ) {
    return this.dbSessionService.update(id, params);
  }

  remove(id: number) {
    return this.dbSessionService.remove(id);
  }
}
