import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbLessonType } from '../../entities/schedule/rb-lesson-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbLessonTypeService {
  constructor(
    @InjectRepository(RbLessonType)
    private readonly slotTypeRepository: Repository<RbLessonType>,
  ) {}

  findOne(id: number) {
    return this.slotTypeRepository.findOne({ where: { id } });
  }
}
