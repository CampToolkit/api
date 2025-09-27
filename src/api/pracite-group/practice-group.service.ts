import { Injectable } from '@nestjs/common';
import { DbPracticeGroupService } from '../../db/db-module/practice-group/db-practice-group.service';
import { DbPracticeGroup_SportsmanService } from '../../db/db-module/practice-group/db-practice-group_sportsman.service';

interface CreateGroupParams {
  name: string;
  parentId?: number;
  campId: number;
}

@Injectable()
export class PracticeGroupService {
  constructor(
    private readonly dbPracticeGroupService: DbPracticeGroupService,
    private readonly dbPracticeGroup_SportsmanService: DbPracticeGroup_SportsmanService,
  ) {}
  create(params: CreateGroupParams) {
    return this.dbPracticeGroupService.create(params);
  }

  createMany(params: CreateGroupParams[]) {
    return this.dbPracticeGroupService.createMany(params);
  }

  findAll(params: { campId?: number }) {
    return this.dbPracticeGroupService.findAll(params);
  }

  findOne(id: number) {
    return this.dbPracticeGroupService.findOne(id);
  }

  update(id: number, params: { name?: string; parentId?: number }) {
    return this.dbPracticeGroupService.update(id, params);
  }

  remove(id: number) {
    return this.dbPracticeGroupService.remove(id);
  }

  addSportsmen(params: {
    campId: number;
    groupId: number;
    sportsmanIds: number[];
  }) {
    return this.dbPracticeGroup_SportsmanService.addSportsmen(params);
  }

  getSportsmen(groupId: number) {
    return this.dbPracticeGroup_SportsmanService.getSportsmen(groupId);
  }
}
