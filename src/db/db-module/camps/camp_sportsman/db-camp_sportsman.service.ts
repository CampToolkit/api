import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Camp } from '../camp/camp.entity';
import { Repository } from 'typeorm';
import { Sportsman } from '../../persons/sportsman/sportsman.entity';

@Injectable()
export class DbCamp_SportsmanService {
  constructor(
    @InjectRepository(Camp)
    private readonly campRepository: Repository<Camp>,
  ) {}

  async findAll(campId: number) {
    const camp = await this.campRepository.findOne({
      where: { id: campId },
      relations: ['sportsmen'],
    });

    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    return camp.sportsmen;
  }

  async addSportsmenToCamp(campId: number, sportsmanIds: number[]) {
    const camp = await this.campRepository.findOne({ where: { id: campId } });
    if (!camp) {
      throw new Error(`Camp with id ${campId} not found`);
    }

    const existingSportsmen = await this.campRepository
      .createQueryBuilder('camp')
      .relation(Camp, 'sportsmen')
      .of(campId)
      .loadMany<Sportsman>();

    const newIds = sportsmanIds.filter(
      (id) => !existingSportsmen.some((s) => s.id === id),
    );

    await this.campRepository
      .createQueryBuilder()
      .relation(Camp, 'sportsmen')
      .of(campId) // к какому лагерю
      .add(newIds); // кого добавляем (можно id или entity)

    return this.campRepository.findOne({
      where: { id: campId },
      relations: ['sportsmen'],
    });
  }

  async removeSportsmenFromCamp(campId: number, sportsmanIds: number[]) {
    return this.campRepository
      .createQueryBuilder()
      .delete()
      .from('camp_sportsman')
      .where('campId = :campId', { campId })
      .andWhere('sportsmanId IN (:...sportsmanIds)', { sportsmanIds })
      .execute();
  }

  async getMissingSportsmenInCamp(campId: number, sportsmanIds: number[]) {
    const result = await this.campRepository
      .createQueryBuilder('camp')
      .innerJoin('camp.sportsmen', 'sportsman')
      .where('campId = :campId', { campId })
      .andWhere('sportsmanId IN (:ids)', { ids: sportsmanIds })
      .select('camp_sportsman.sportsmanId', 'sportsmanId')
      .getRawMany<{ sportsmanId: number }>();

    const foundIds = result.map((s) => s.sportsmanId);
    return sportsmanIds.filter((id) => !foundIds.includes(id));
  }
}
