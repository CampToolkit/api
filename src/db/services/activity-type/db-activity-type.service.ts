import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbActivityType } from '../../entities/schedule/rb-activity-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbActivityTypeService {
  constructor(
    @InjectRepository(RbActivityType)
    private readonly rbActivityTypeRepository: Repository<RbActivityType>,
  ) {}
  findOne(id: number) {
    return this.rbActivityTypeRepository.findOne({ where: { id } });
  }
}
