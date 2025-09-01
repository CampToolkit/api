import { Injectable } from '@nestjs/common';
import { DbRbActivityTypeService } from '../../db/db-module/schedule/rb-activity-type/db-rb-activity-type.service';

@Injectable()
export class RbActivityTypeService {
  constructor(private dbRbActivityTypeService: DbRbActivityTypeService) {}

  create(params: { name: string }) {
    return this.dbRbActivityTypeService.create(params);
  }

  findAll() {
    return this.dbRbActivityTypeService.findAll();
  }

  findOne(id: number) {
    return this.dbRbActivityTypeService.findOne(id);
  }

  async update(id: number, params: { name: string }) {
    return this.dbRbActivityTypeService.update(id, params);
  }

  remove(id: number) {
    return this.dbRbActivityTypeService.remove(id);
  }
}
