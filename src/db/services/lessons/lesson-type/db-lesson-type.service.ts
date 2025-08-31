import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbLessonType } from '../../../entities/schedule/rb-lesson-type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbLessonTypeService {
  constructor(
    @InjectRepository(RbLessonType)
    private readonly lessonTypeRepository: Repository<RbLessonType>,
  ) {}

  create(params: { name: string }) {
    const lessonType = this.lessonTypeRepository.create(params);
    return this.lessonTypeRepository.save(lessonType);
  }

  findAll() {
    return this.lessonTypeRepository.find();
  }

  findOne(id: number) {
    return this.lessonTypeRepository.findOne({ where: { id: id } });
  }

  async update(id: number, params: { name: string }) {
    const lessonType = await this.lessonTypeRepository.findOne({
      where: { id: id },
    });
    if (!lessonType) {
      throw new Error(`lesson type ${id} not found`);
    }
    lessonType.name = params.name;
    return this.lessonTypeRepository.update(id, lessonType);
  }

  remove(id: number) {
    return this.lessonTypeRepository.softDelete(id);
  }
}
