import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Camp } from '../../../entities/camp/camp.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbCamp_CoachService {
  constructor(
    @InjectRepository(Camp)
    private readonly campRepository: Repository<Camp>,
  ) {}

  async findAll(campId: number) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
      relations: ['coaches'],
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    return camp?.coaches;
  }

  async addCoachesToCamp(campId: number, coachIds: number[]) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
      relations: ['coaches'],
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    const newIds = coachIds.filter(
      (coachId) => !camp.coaches.some((item) => item.id === coachId),
    );

    if (newIds.length === 0) {
      throw new Error(`Camp with id ${campId} has all sent coaches`);
    }

    await this.campRepository
      .createQueryBuilder('camp')
      .relation(Camp, 'coaches')
      .of(campId)
      .add(newIds);

    return this.campRepository.findOne({
      where: { id: campId },
      relations: ['coaches'],
    });
  }

  async removeCoachesFromCamp(campId: number, coachIds: number[]) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    return this.campRepository
      .createQueryBuilder()
      .delete()
      .from('camp_coach')
      .where('campId =:id', { id: campId })
      .andWhere('coachId IN (:items)', { ids: coachIds })
      .execute();
  }
}
