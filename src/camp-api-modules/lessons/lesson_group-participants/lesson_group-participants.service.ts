import { Injectable } from '@nestjs/common';
import { DbLessonGroupParticipantsService } from '../../../db/services/lesson-group-participants/db-lesson-group-participants.service';

@Injectable()
export class LessonGroupParticipantsService {
  constructor(
    private dbLessonGroupParticipantsService: DbLessonGroupParticipantsService,
  ) {}

  create(params: { lessonId: number; groupId: number }) {
    return this.dbLessonGroupParticipantsService.create(params);
  }

  update(id: number, params: { groupId: number }) {
    return this.dbLessonGroupParticipantsService.update(id, params);
  }

  remove(id: number) {
    return this.dbLessonGroupParticipantsService.remove(id);
  }
}
