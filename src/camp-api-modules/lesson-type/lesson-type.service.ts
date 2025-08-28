import { Injectable } from '@nestjs/common';
import { CreateLessonTypeDto } from './dto/create-lesson-type.dto';
import { UpdateLessonTypeDto } from './dto/update-lesson-type.dto';
import { DbLessonTypeService } from '../../db/services/lesson-type/db-lesson-type.service';

@Injectable()
export class LessonTypeService {
  constructor(private dbLessonTypeService: DbLessonTypeService) {}

  create(params: { name: string }) {
    return this.dbLessonTypeService.create(params);
  }

  findAll() {
    return this.dbLessonTypeService.findAll();
  }

  findOne(id: number) {
    return this.dbLessonTypeService.findOne(id);
  }

  async update(id: number, params: { name: string }) {
    return this.dbLessonTypeService.update(id, params);
  }

  remove(id: number) {
    return this.dbLessonTypeService.remove(id);
  }
}
