import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Sportsman } from '../../entities/person/sportsman.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbSportsmanService {
  constructor(
    @InjectRepository(Sportsman)
    private readonly sportsmanRepository: Repository<Sportsman>,
  ) {}

  async create(params: {
    lastName: string;
    firstName: string;
    patrName: string;
    birthDate?: string;
  }) {
    const sportsman = await this.sportsmanRepository.findOne({
      where: {
        lastName: params.lastName,
        firstName: params.firstName,
        patrName: params.patrName,
      },
    });

    if (sportsman) {
      throw new Error('Sportsman already exists');
    }

    const newSportsman = this.sportsmanRepository.create(params);
    return this.sportsmanRepository.save(newSportsman);
  }

  findAll() {
    return this.sportsmanRepository.find();
  }

  findAllByCamp(campId: number) {
    return this.sportsmanRepository
      .createQueryBuilder('sm')
      .innerJoin('camp_sportsman', 'csm', 'csm.sportsmanId = sm.id')
      .where('csm.campId = :campId', { campId })
      .getMany();
  }

  findOne(id: number) {
    return this.sportsmanRepository.findOne({ where: { id } });
  }

  // todo сделать поиск по всем полям

  async update(
    id: number,
    params: Partial<{
      lastName: string;
      firstName: string;
      patrName: string;
      birthDate: string;
    }>,
  ) {
    const sportsman = await this.sportsmanRepository.findOne({ where: { id } });
    if (!sportsman) {
      throw new Error(`No sportsman found with id: ${id}`);
    }
    Object.assign(sportsman, params);
    return this.sportsmanRepository.save(sportsman);
  }

  async remove(id: number) {
    const sportsman = await this.sportsmanRepository.findOne({ where: { id } });
    if (!sportsman) {
      throw new Error(`No sportsman found with id: ${id}`);
    }
    return this.sportsmanRepository.softDelete(id);
  }
}
