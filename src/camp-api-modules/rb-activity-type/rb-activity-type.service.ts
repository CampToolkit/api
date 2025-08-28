import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbActivityType } from '../../db/entities/schedule/rb-activity-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RbActivityTypeService {
  constructor(
    @InjectRepository(RbActivityType)
    private rbActivityTypeRepository: Repository<RbActivityType>,
  ) {}

  create(params: { name: string }) {
    const activityType = this.rbActivityTypeRepository.create(params);
    return this.rbActivityTypeRepository.save(activityType);
  }

  findAll() {
    return this.rbActivityTypeRepository.find();
  }

  findOne(id: number) {
    return this.rbActivityTypeRepository.findOne({ where: { id: id } });
  }

  async update(id: number, params: { name: string }) {
    const activityType = await this.rbActivityTypeRepository.findOne({
      where: { id: id },
    });
    if (!activityType) {
      throw new Error(`Activity type ${id} not found`);
    }
    activityType.name = params.name;
    return this.rbActivityTypeRepository.update(id, activityType);
  }

  remove(id: number) {
    return this.rbActivityTypeRepository.softDelete(id);
  }
}
