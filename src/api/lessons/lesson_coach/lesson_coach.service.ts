import { Injectable, Logger } from '@nestjs/common';
import { DbLesson_CoachService } from '../../../db/db-module/schedule/lesson_coach/db-lesson_coach.service';

@Injectable()
export class Lesson_CoachService {
  constructor(private dbLesson_Coach: DbLesson_CoachService) {}

  private readonly logger = new Logger('lesson_coach');

  create(params: {
    lessonId: number;
    coachId: number;
    role: 'PRIMARY' | 'SECONDARY';
  }) {
    return this.dbLesson_Coach.create(params);
  }

  update(
    id: number,
    params: Partial<{
      coachId: number;
      role: 'PRIMARY' | 'SECONDARY';
    }>,
  ) {
    return this.dbLesson_Coach.update(id, params);
  }

  remove(id: number) {
    return this.dbLesson_Coach.delete(id);
  }
}
