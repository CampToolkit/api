import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Camp } from '../../entities/camp/camp.entity';
import { Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@Injectable()
export class DbCampService {
  constructor(
    @InjectRepository(Camp)
    private readonly campRepository: Repository<Camp>,
  ) {}
  logger = new Logger('DbCampService');

  findAll() {
    return this.campRepository.find();
  }

  findOne(id: number) {
    return this.campRepository.findOneBy({ id });
  }

  create(params: {
    startDate: string;
    endDate: string;
    name: string;
    city: string;
  }): Promise<Camp> {
    const camp = this.campRepository.create(params);
    return this.campRepository.save(camp);
  }

  async update(
    id: number,
    params: Partial<{
      startDate: string;
      endDate: string;
      name: string;
      city: string;
    }>,
  ) {
    const camp = await this.campRepository.findOne({ where: { id: id } });
    if (!camp) {
      throw new Error(`Camp with id ${id} not found`);
    }
    Object.assign(camp, params);

    return this.campRepository.save(camp);
  }

  async remove(id: number) {
    const camp = await this.campRepository.findOneBy({ id });
    if (!camp) {
      throw new Error(`Camp with id ${id} not found`);
    }
    return this.campRepository.softDelete(id);
  }
}
