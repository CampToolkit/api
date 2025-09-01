import { Injectable } from '@nestjs/common';
import { DbLessonService } from '../../../db/db-module/schedule/lesson/db-lesson.service';

@Injectable()
export class LessonService {
  constructor(private dbLessonService: DbLessonService) {}

  create(args: {
    campId: number;
    startDate: string;
    endDate: string;
    activityTypeId: number;
    auditoriumId: number;
    lessonTypeId: number;
  }) {
    return this.dbLessonService.create(args);
  }

  findAllBy(params: {
    campId: number;
    startDate?: string;
    activityTypeId?: number;
    auditoriumId?: number;
    lessonTypeId?: number;
  }) {
    return this.dbLessonService.findAllBy(params);
  }

  findOne(id: number) {
    return this.dbLessonService.findOne(id);
  }

  update(
    id: number,
    params: Partial<{
      startDate: string;
      endDate: string;
      activityTypeId: number;
      auditoriumId: number;
      lessonTypeId: number;
    }>,
  ) {
    return this.dbLessonService.update(id, params);
  }

  remove(id: number) {
    return this.dbLessonService.delete(id);
  }
}
