import { Injectable } from '@nestjs/common';
import { DbLesson_GroupService } from '../../../db/db-module/schedule/lesson-group-participants/db-lesson_group.service';
import { Lesson_Group } from '../../../db/db-module/schedule/lesson-group-participants/lesson_group.entity';

function formatResponse(data: Lesson_Group) {
  return {
    id: data.id,
    created_at: data.created_at,
    updated_at: data.updated_at,
    deleted_at: data.deleted_at,
    lessonId: data.lesson.id,
    groupId: data.group.id,
  };
}

@Injectable()
export class Lesson_GroupService {
  constructor(private dbLesson_GroupService: DbLesson_GroupService) {}

  async create(params: { lessonId: number; groupId: number }) {
    const data = await this.dbLesson_GroupService.create(params);
    return formatResponse(data);
  }

  async update(id: number, params: { groupId: number }) {
    const data = await this.dbLesson_GroupService.update(id, params);
    return formatResponse(data);
  }

  remove(id: number) {
    return this.dbLesson_GroupService.remove(id);
  }
}
