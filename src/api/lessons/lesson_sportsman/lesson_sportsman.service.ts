import { Injectable } from '@nestjs/common';
import { DbLesson_SportsmanParticipantsService } from '../../../db/db-module/schedule/lesson-sportsman-participants/db-lesson_sportsman-participants.service';
import { Lesson_Sportsman } from '../../../db/db-module/schedule/lesson-sportsman-participants/lesson_sportsman.entity';

function formatResponse(data: Lesson_Sportsman) {
  return {
    id: data.id,
    created_at: data.created_at,
    updated_at: data.updated_at,
    deleted_at: data.deleted_at,
    lessonId: data.lesson.id,
    sportsmanId: data.sportsman.id,
  };
}

@Injectable()
export class Lesson_SportsmanService {
  constructor(
    private dbLesson_SportsmanService: DbLesson_SportsmanParticipantsService,
  ) {}

  async create(params: { lessonId: number; sportsmanId: number }) {
    const data = await this.dbLesson_SportsmanService.create(params);
    return formatResponse(data);
  }

  async update(id: number, params: { sportsmanId: number }) {
    const data = await this.dbLesson_SportsmanService.update(id, params);
    return formatResponse(data);
  }

  remove(id: number) {
    return this.dbLesson_SportsmanService.remove(id);
  }
}
