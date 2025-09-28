import { Injectable } from '@nestjs/common';
import { DbLessonService } from '../../../db/db-module/schedule/lesson/db-lesson.service';
import { CreateLessonInput, UpdateLessonInput } from './input/LessonInputs';
import { Lesson } from '../../../db/db-module/schedule/lesson/lesson.entity';

const formatResponse = (lesson: Lesson) => {
  return {
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
  };
};

@Injectable()
export class LessonService {
  constructor(private dbLessonService: DbLessonService) {}

  async create(input: CreateLessonInput) {
    const data = await this.dbLessonService.create(input);
    return formatResponse(data);
  }

  async findAllBy(params: {
    campId: number;
    startDate?: string;
    activityTypeId?: number;
    auditoriumId?: number;
    lessonTypeId?: number;
    groupId?: number;
    sportsmenId?: number;
  }) {
    const data = await this.dbLessonService.findAllBy(params);

    return data.map(formatResponse);
  }

  async findOne(id: number) {
    const data = await this.dbLessonService.findOne(id);
    if (data) {
      return formatResponse(data);
    }
    return null;
  }

  async update(id: number, input: UpdateLessonInput) {
    const data = await this.dbLessonService.update(id, input);
    return formatResponse(data);
  }

  remove(id: number) {
    return this.dbLessonService.delete(id);
  }
}
