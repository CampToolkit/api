import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson_Group } from './lesson_group.entity';
import { Repository } from 'typeorm';
import { PracticeGroup } from '../../practice-group/practice-group.entity';
import { Lesson } from '../lesson/lesson.entity';

@Injectable()
export class DbLesson_GroupService {
  constructor(
    @InjectRepository(Lesson_Group)
    private lesson_GroupRepository: Repository<Lesson_Group>,
  ) {}

  async create(params: { lessonId: number; groupId: number }) {
    const existingRecord = await this.lesson_GroupRepository.findOne({
      where: {
        lesson: { id: params.lessonId },
        group: { id: params.groupId },
      },
    });
    if (existingRecord) {
      throw new Error(
        `Group with id: ${params.groupId} has already signed up for this lesson with id ${params.lessonId}.`,
      );
    }
    const lesson_group = this.lesson_GroupRepository.create({
      lesson: { id: params.lessonId } as Lesson,
      group: { id: params.groupId } as PracticeGroup,
    });
    return this.lesson_GroupRepository.save(lesson_group);
  }

  async update(id: number, params: { groupId: number }) {
    const lesson_group = await this.lesson_GroupRepository.findOneBy({ id });
    if (!lesson_group) {
      throw new Error(`lessonGroup with id ${id} not found`);
    }
    lesson_group.group = { id: params.groupId } as PracticeGroup;
    return this.lesson_GroupRepository.save(lesson_group);
  }

  remove(id: number) {
    return this.lesson_GroupRepository.softDelete(id);
  }
}
