import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeGroup } from './practice-group.entity';
import { Repository } from 'typeorm';
import { DbCamp_SportsmanService } from '../camps/camp_sportsman/db-camp_sportsman.service';
import { AddSportsmenToGroupInput } from './input/db-practice-group.input';
import { DBError } from '../../../shared/errors/db-errors.error';

@Injectable()
export class DbPracticeGroup_SportsmanService {
  constructor(
    @InjectRepository(PracticeGroup)
    private readonly practiceGroupRepository: Repository<PracticeGroup>,
    private readonly campSportsmanService: DbCamp_SportsmanService,
  ) {}

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

  async getSportsmen(groupId: number) {
    const group = await this.practiceGroupRepository.findOne({
      where: { id: groupId },
      relations: ['sportsmen'],
    });

    if (!group) {
      throw new DBError(`group with ID ${groupId} does not exist`, {
        code: 'NOT_FOUND',
      });
    }
    return group;
  }
}
