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

  async findAllBy(params: {
    campId: number;
    startDate?: string;
    activityTypeId?: number;
    auditoriumId?: number;
    lessonTypeId?: number;
  }) {
    const data = await this.dbLessonService.findAllBy(params);

    return data.map((lesson) => ({
      id: lesson.id,
      startDate: lesson.startDate,
      endDate: lesson.endDate,
      auditorium: lesson.auditorium,
      lessonType: lesson.lessonType,
      activityType: lesson.activityType,
      groups: lesson.lesson_group.map((item) => ({
        ...item.group,
        lesson_group: item.id,
      })),
      sportsmen: lesson.lesson_sportsmen.map((item) => ({
        ...item.sportsman,
        lesson_sportsman: item.id,
      })),
      coaches: lesson.lesson_coaches.map((item) => ({
        ...item.coach,
        lesson_coach: item.id,
      })),
    }));
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
