import { Between, FindOptionsWhere, Repository, UpdateResult } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from '../../entities/schedule/lesson.entity';

import { RbActivityType } from '../../entities/schedule/rb-activity-type.entity';
import { RbAuditorium } from '../../entities/schedule/rb-auditorium.entity';
import { RbLessonType } from '../../entities/schedule/rb-lesson-type.entity';

@Injectable()
export class DbLessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  // Создание нового занятия
  async create(args: {
    campId: number;
    startDate: string;
    endDate: string;
    activityTypeId: number;
    auditoriumId: number;
    lessonTypeId: number;
  }): Promise<Lesson> {
    const lesson = this.lessonRepository.create(args);
    return await this.lessonRepository.save(lesson);
  }

  findOne(id: number) {
    return this.lessonRepository.findOne({
      where: { id },
      relations: [
        'lesson_coach',
        'lesson_coach.coach',
        'lessonGroupParticipants',
        'lessonGroupParticipants.group',
        'lessonSportsmanParticipants',
        'lessonSportsmanParticipants.sportsman',
        'activityType',
      ],
    });
  }

  findAllBy(params: {
    campId: number;
    startDate?: string;
    activityTypeId?: number;
    auditoriumId?: number;
    lessonTypeId?: number;
  }) {
    const where: FindOptionsWhere<Lesson> = {};
    where.camp = { id: params.campId };

    if (params.startDate) {
      const startDate = new Date(params.startDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(params.startDate);
      endDate.setHours(23, 59, 0, 0);
      where.startDate = Between(startDate, endDate);
    }

    if (params.activityTypeId) {
      where.activityType = { id: params.activityTypeId };
    }

    if (params.auditoriumId) {
      where.auditorium = { id: params.auditoriumId };
    }

    if (params.lessonTypeId) {
      where.lessonType = { id: params.lessonTypeId };
    }

    return this.lessonRepository.find({
      where: where,
      relations: [
        'lesson_coaches',
        'lesson_coaches.coach',
        'lesson_group',
        'lesson_group.group',
        'lesson_sportsmen',
        'lesson_sportsmen.sportsman',
        'activityType',
      ],
    });
  }

  async update(
    id: number,
    params: Partial<{
      startDate: string;
      endDate: string;
      activityTypeId: number;
      auditoriumId: number;
      lessonTypeId: number;
    }>,
  ): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOneBy({ id });
    if (!lesson) {
      throw new Error(`lesson is with id ${id} not found`);
    }

    if (params.startDate) {
      lesson.startDate = new Date(params.startDate);
    }
    if (params.endDate) {
      lesson.endDate = new Date(params.endDate);
    }

    if (params.activityTypeId) {
      lesson.activityType = { id: params.activityTypeId } as RbActivityType;
    }

    if (params.lessonTypeId) {
      lesson.lessonType = { id: params.lessonTypeId } as RbLessonType;
    }

    if (params.auditoriumId) {
      lesson.auditorium = { id: params.auditoriumId } as RbAuditorium;
    }

    return this.lessonRepository.save(lesson);
  }

  async delete(id: number): Promise<UpdateResult> {
    const lesson = await this.lessonRepository.findOneBy({ id });
    if (!lesson) {
      throw new Error(`lesson is with id ${id} not found`);
    }
    return this.lessonRepository.softDelete(lesson);
  }
}
