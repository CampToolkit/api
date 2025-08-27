import { Injectable } from '@nestjs/common';
import { DbLesson_SportsmanParticipantsService } from '../../../db/services/lesson-sportsman-participants/db-lesson_sportsman-participants.service';

@Injectable()
export class Lesson_SportsmanService {
  constructor(
    private dbLesson_SportsmanService: DbLesson_SportsmanParticipantsService,
  ) {}

  create(params: { lessonId: number; sportsmanId: number }) {
    return this.dbLesson_SportsmanService.create(params);
  }

  update(id: number, params: { sportsmanId: number }) {
    return this.dbLesson_SportsmanService.update(id, params);
  }

  remove(id: number) {
    return this.dbLesson_SportsmanService.remove(id);
  }
}
