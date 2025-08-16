import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Camp } from '../../entities/camp.entity';
import { Repository } from 'typeorm';
import { UpdateCampDto } from '../../../modules/camp/dto/update-camp.dto';

@Injectable()
export class DbCampService {
  constructor(
    @InjectRepository(Camp)
    private readonly campRepository: Repository<Camp>,
  ) {}

  findAll() {
    return this.campRepository.find();
  }

  findOne(id: number) {
    return this.campRepository.findOneBy({ id });
  }

  create(params: {
    startDate: Date;
    endDate: Date;
    name: string;
    city: string;
  }) {
    return this.campRepository.create(params);
  }

  async update(
    id: number,
    params: Partial<{
      startDate: Date;
      endDate: Date;
      name: string;
      city: string;
    }>,
  ) {
    const camp = await this.campRepository.findOneBy({ id });
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
    return this.campRepository.delete(id);
  }
}
