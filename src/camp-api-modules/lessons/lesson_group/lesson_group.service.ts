import { Injectable } from '@nestjs/common';
import { DbLesson_GroupService } from '../../../db/services/lessons/lesson-group-participants/db-lesson_group.service';

@Injectable()
export class Lesson_GroupService {
  constructor(private dbLesson_GroupService: DbLesson_GroupService) {}

  create(params: { lessonId: number; groupId: number }) {
    return this.dbLesson_GroupService.create(params);
  }

  update(id: number, params: { groupId: number }) {
    return this.dbLesson_GroupService.update(id, params);
  }

  remove(id: number) {
    return this.dbLesson_GroupService.remove(id);
  }
}
