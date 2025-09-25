import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeGroup } from './practice-group.entity';
import { Repository, FindOptionsWhere } from 'typeorm';
import { checkDuplicates } from '../shared/utils/check-duplicates';
import { DBError } from '../../../shared/errors/db-errors.error';

import { AddSportsmenToGroupInput } from './input/db-practice-group.input';

import { DbCamp_SportsmanService } from '../camps/camp_sportsman/db-camp_sportsman.service';

interface CreateGroupParams {
  name: string;
  parentId?: number;
  campId: number;
}

@Injectable()
export class DbPracticeGroupService {
  constructor(
    @InjectRepository(PracticeGroup)
    private readonly practiceGroupRepository: Repository<PracticeGroup>,
    private readonly campSportsmanService: DbCamp_SportsmanService,
  ) {}

  logger = new Logger('DbPracticeGroupService');

  /*
   todo для createMany и createMany
    сделать проверку если пришел parenId:
    если Group.id == parenId && Group.parentId != null,
    то выбросить ошибку о недопустимости присваивать подгруппе дочернюю групп
   */
  async create(params: CreateGroupParams) {
    await checkDuplicates({
      repository: this.practiceGroupRepository,
      where: {
        name: params.name,
        parent: { id: params.parentId },
        camp: { id: params.campId },
      },
      entityName: 'PracticeGroup',
      uniqueFields: ['name'],
    });

    const group = this.practiceGroupRepository.create({
      name: params.name,
      parent: { id: params.parentId },
      camp: { id: params.campId },
    });

    return this.practiceGroupRepository.save(group);
  }

  async createMany(params: CreateGroupParams[]) {
    await checkDuplicates({
      repository: this.practiceGroupRepository,
      where: params.map((pm) => ({
        name: pm.name,
        parent: { id: pm.parentId },
        camp: { id: pm.campId },
      })),
      entityName: 'PracticeGroup',
      uniqueFields: ['name'],
    });

    const newGroups = this.practiceGroupRepository.create(
      params.map((p) => ({
        name: p.name,
        parent: { id: p.parentId },
        camp: { id: p.campId },
      })),
    );
    return this.practiceGroupRepository.save(newGroups);
  }

  findAll(params: { campId?: number }) {
    const whereParams: FindOptionsWhere<PracticeGroup> = {};
    if (params.campId) {
      whereParams.camp = { id: params.campId };
    }
    return this.practiceGroupRepository.find({
      where: whereParams,
    });
  }

  findAllByCamp(campId: number) {
    return this.practiceGroupRepository.find({
      where: {
        camp: { id: campId },
      },
      relations: ['children'],
    });
  }

  findOne(id: number) {
    return this.practiceGroupRepository.findOne({
      where: { id: id },
      relations: ['parent', 'children'],
    });
  }

  async update(id: number, params: { name?: string; parentId?: number }) {
    const group = await this.practiceGroupRepository.findOne({
      where: { id: id },
    });
    if (!group) {
      throw new Error(`PracticeGroup with id ${id} not found`);
    }

    if (params.parentId) {
      const parent = await this.practiceGroupRepository.findOne({
        where: { id: params.parentId },
      });
      if (!parent) {
        throw new Error(`ParentGroup with id ${id} not found`);
      }
    }

    if (params.name) {
      group.name = params.name;
    }
    if (params.parentId) {
      group.parent = { id: params.parentId } as PracticeGroup;
    }

    return this.practiceGroupRepository.save(group);
  }

  async remove(id: number) {
    const group = await this.practiceGroupRepository.findOne({
      where: { id: id },
    });
    if (!group) {
      throw new Error(`PracticeGroup with id ${id} not found`);
    }
    return this.practiceGroupRepository.softDelete(id);
  }

  async addSportsmen(input: AddSportsmenToGroupInput) {
    const { campId, groupId, sportsmanIds } = input;

    return this.practiceGroupRepository.manager.transaction(async (manager) => {
      const group = await manager.findOne(PracticeGroup, {
        where: { id: groupId },
        relations: ['sportsmen'],
      });

      if (!group) {
        throw new DBError(`group with ID ${groupId} does not exist`, {
          code: 'NOT_FOUND',
        });
      }

      const existingIds = group.sportsmen.map((s) => s.id);

      const newIds = sportsmanIds.filter((id) => !existingIds.includes(id));

      if (newIds.length === 0) {
        throw new DBError(
          `ALL Sportsmen in request with IDs ${sportsmanIds.join(',')} are already members of group with ID ${campId}`,
          { code: 'SPORTSMEN_ALREADY_IN_GROUP' },
        );
      }

      const missingIds =
        await this.campSportsmanService.getMissingSportsmenInCamp(
          campId,
          newIds,
        );

      if (missingIds.length > 0) {
        throw new DBError(
          `Sportsmen with IDs ${missingIds.join(',')} do not take part of Camp with ID ${campId}`,
          { code: 'MEMBERSHIP_REQUIRED' },
        );
      }

      await manager
        .createQueryBuilder()
        .relation(PracticeGroup, 'sportsmen')
        .of(groupId)
        .add(newIds);

      return manager.findOne(PracticeGroup, {
        where: { id: groupId },
        relations: ['sportsmen'],
      });
    });
  }
}
