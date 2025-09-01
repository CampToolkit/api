import { Injectable } from '@nestjs/common';
import { DbRbAuditoriumService } from '../../db/services/rb-auditorium/db-rb-auditorium.service';

@Injectable()
export class RbAuditoriumService {
  constructor(private dbRbAuditoriumService: DbRbAuditoriumService) {}
  create(params: { name: string }) {
    return this.dbRbAuditoriumService.create(params);
  }

  findAll() {
    return this.dbRbAuditoriumService.findAll();
  }

  findOne(id: number) {
    return this.dbRbAuditoriumService.findOne(id);
  }

  async update(id: number, params: { name: string }) {
    return this.dbRbAuditoriumService.update(id, params);
  }

  remove(id: number) {
    return this.dbRbAuditoriumService.remove(id);
  }
}
