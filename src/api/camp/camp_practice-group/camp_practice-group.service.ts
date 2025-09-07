import { Injectable } from '@nestjs/common';
import { DbPracticeGroupService } from '../../../db/db-module/practice-group/db-practice-group.service';

@Injectable()
export class Camp_PracticeGroupService {
  constructor(
    private readonly dbPracticeGroupService: DbPracticeGroupService,
  ) {}

  async findAll(campId: number) {
    const groups = await this.dbPracticeGroupService.findAllByCamp(campId);
    return groups.filter((item) => item.parentId === null);
  }
}
