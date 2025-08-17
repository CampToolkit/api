import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbSlotType } from '../../entities/rb-slot-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbSlotTypeService {
  constructor(
    @InjectRepository(RbSlotType)
    private readonly slotTypeRepository: Repository<RbSlotType>,
  ) {}

  findOne(id: number) {
    return this.slotTypeRepository.findOne({ where: { id } });
  }
}
