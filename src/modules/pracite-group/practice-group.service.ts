import { Injectable } from '@nestjs/common';
import { DbPracticeGroupService } from '../../db/services/db-practice-group/db-practice-group.service';

@Injectable()
export class PracticeGroupService {
  constructor(
    private readonly dbPracticeGroupService: DbPracticeGroupService,
  ) {}
  create(params: { name: string; parentId?: number }) {
    return this.dbPracticeGroupService.create(params);
  }

  findAll() {
    return this.dbPracticeGroupService.findAll();
  }

  findAllByCamp(campId: number) {
    return this.dbPracticeGroupService.findAllByCamp(campId);
  }

  update(id: number, params: Partial<{ name: string; parentId?: number }>) {
    return this.dbPracticeGroupService.update(id, params);
  }

  remove(id: number) {
    return this.dbPracticeGroupService.remove(id);
  }
}
