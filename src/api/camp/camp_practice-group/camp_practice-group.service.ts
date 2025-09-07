import { Injectable } from '@nestjs/common';
import { DbPracticeGroupService } from '../../../db/db-module/practice-group/db-practice-group.service';

@Injectable()
export class Camp_PracticeGroupService {
  constructor(
    private readonly dbPracticeGroupService: DbPracticeGroupService,
  ) {}

  async findAll(campId: number) {
    const groups = await this.dbPracticeGroupService.findAllByCamp(campId);
    // return groups;
    return groups
      .filter((item) => item?.parent?.id === undefined)
      .map((item) => {
        const children = item.children?.map((child) => ({
          ...child,
          children: [],
        }));
        const newItem = {
          parentId: null,
          ...item,
          children,
        };
        delete newItem.parent;
        return newItem;
      });
  }
}
