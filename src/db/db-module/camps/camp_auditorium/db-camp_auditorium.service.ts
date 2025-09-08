import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Camp } from '../camp/camp.entity';
import { In, Repository } from 'typeorm';
import { RbAuditorium } from '../../rb-auditorium/rb-auditorium.entity';

@Injectable()
export class DbCamp_AuditoriumService {
  constructor(
    @InjectRepository(Camp)
    private campRepository: Repository<Camp>,
  ) {}

  async findAll(campId: number) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
      relations: ['auditoriums'],
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    return camp.auditoriums;
  }

  async addManyAuditoriumToCamp(campId: number, auditoriumIds: number[]) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    const existingAuditoriums = await this.campRepository
      .createQueryBuilder('camp')
      .relation(Camp, 'auditoriums')
      .of(campId)
      .loadMany<RbAuditorium>();

    const newIds = auditoriumIds.filter(
      (id) => !existingAuditoriums.some((item) => item.id === id),
    );

    if (newIds.length !== auditoriumIds.length) {
      throw new Error(`Camp with id ${campId} has some of sent auditoriums`);
    }

    await this.campRepository
      .createQueryBuilder('camp')
      .relation(Camp, 'auditoriums')
      .of(campId)
      .add(newIds);

    return this.campRepository.find({
      where: { id: campId, auditoriums: { id: In(auditoriumIds) } },
      relations: ['auditoriums'],
    });
  }

  async removeAuditoriumFromCamp(campId: number, auditoriumIds: number[]) {
    return this.campRepository
      .createQueryBuilder()
      .delete()
      .from('camp_auditorium')
      .where('campId =:campId', { id: campId })
      .andWhere('auditoriumId IN (:ids)', { ids: auditoriumIds })
      .execute();
  }
}
