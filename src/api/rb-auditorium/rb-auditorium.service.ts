import { Injectable } from '@nestjs/common';
import { DbRbAuditoriumService } from '../../db/db-module/rb-auditorium/db-rb-auditorium.service';

interface AuditoriumParams {
  name: string;
}

@Injectable()
export class RbAuditoriumService {
  constructor(private dbRbAuditoriumService: DbRbAuditoriumService) {}
  create(params: AuditoriumParams) {
    return this.dbRbAuditoriumService.create(params);
  }

  createMany(params: AuditoriumParams[]) {
    return this.dbRbAuditoriumService.createMany(params);
  }

  findAll() {
    return this.dbRbAuditoriumService.findAll();
  }

  findOne(id: number) {
    return this.dbRbAuditoriumService.findOne(id);
  }

  async update(id: number, params: AuditoriumParams) {
    return this.dbRbAuditoriumService.update(id, params);
  }

  remove(id: number) {
    return this.dbRbAuditoriumService.remove(id);
  }
}
