import {
  Between,
  createQueryBuilder,
  DeleteResult,
  FindOptionsWhere,
  Repository,
} from 'typeorm';

import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson } from './lesson.entity';

import { RbActivityType } from '../rb-activity-type/rb-activity-type.entity';
import { RbAuditorium } from '../../rb-auditorium/rb-auditorium.entity';
import { RbLessonType } from '../lesson-type/rb-lesson-type.entity';
import { CreateLessonInput, UpdateLessonInput } from './input/db-lesson.input';
import { Lesson_Coach } from '../lesson_coach/lesson_coach.entity';
import { Lesson_Group } from '../lesson-group-participants/lesson_group.entity';
import { Lesson_Sportsman } from '../lesson-sportsman-participants/lesson_sportsman.entity';
import { Coach } from '../../persons/coach/coach.entity';
import { PracticeGroup } from '../../practice-group/practice-group.entity';
import { Sportsman } from '../../persons/sportsman/sportsman.entity';

const DEFAULT_RELATIONS = [
  'lesson_coaches',
  'lesson_coaches.coach',
  'lesson_group',
  'lesson_group.group',
  'lesson_sportsmen',
  'lesson_sportsmen.sportsman',
  'activityType',
  'lessonType',
  'auditorium',
];

@Injectable()
export class DbLessonService {
  constructor(
    @InjectRepository(Lesson)
    private lessonRepository: Repository<Lesson>,
  ) {}

  logger = new Logger(DbLessonService.name);

  async create(input: CreateLessonInput): Promise<Lesson> {
    return await this.lessonRepository.manager.transaction(async (manager) => {
      const lesson = manager.create(Lesson, {
        camp: { id: input.campId },
        activityType: { id: input.activityTypeId },
        auditorium: { id: input.auditoriumId },
        lessonType: { id: input.lessonTypeId },
        startDate: input.startDate,
        endDate: input.endDate,
      });
      await manager.save(lesson);

      if (input.coaches?.length) {
        const lessonCoaches = input.coaches.map((c) =>
          manager.create(Lesson_Coach, {
            lesson,
            coach: { id: c.coachId },
            role: c.role,
          }),
        );
        await manager.save(lessonCoaches);
      }

      if (input.groupIds?.length) {
        const lessonGroups = input.groupIds.map((groupId) =>
          manager.create(Lesson_Group, {
            lesson,
            group: { id: groupId },
          }),
        );
        await manager.save(lessonGroups);
      }

      if (input.sportsmanIds?.length) {
        const lessonSportsmen = input.sportsmanIds.map((sportsmanId) =>
          manager.create(Lesson_Sportsman, {
            lesson,
            sportsman: { id: sportsmanId },
          }),
        );
        await manager.save(lessonSportsmen);
      }

      return manager.findOneOrFail(Lesson, {
        where: { id: lesson.id },
        relations: DEFAULT_RELATIONS,
      });
    });
  }

  findOne(id: number) {
    return this.lessonRepository.findOne({
      where: { id },
      relations: DEFAULT_RELATIONS,
    });
  }

  async findAllBy(params: {
    campId: number;
    startDate?: string;
    activityTypeId?: number;
    auditoriumId?: number;
    lessonTypeId?: number;
    groupId?: number;
    sportsmanId?: number;
  }) {
    const qb = this.lessonRepository
      .createQueryBuilder('lesson')
      .innerJoin('lesson.camp', 'camp')
      .leftJoinAndSelect('lesson.activityType', 'activityType')
      .leftJoinAndSelect('lesson.auditorium', 'auditorium')
      .leftJoinAndSelect('lesson.lessonType', 'lessonType')
      .leftJoinAndSelect('lesson.lesson_group', 'lesson_group')
      .leftJoinAndSelect('lesson_group.group', 'group')
      .leftJoinAndSelect('lesson.lesson_sportsmen', 'lesson_sportsmen')
      .leftJoinAndSelect('lesson_sportsmen.sportsman', 'sportsman');

    qb.where('camp.id = :id', { id: params.campId });

    if (params.startDate) {
      const startDate = new Date(params.startDate);
      startDate.setHours(0, 0, 0, 0);
      const endDate = new Date(params.startDate);
      endDate.setHours(23, 59, 0, 0);

      qb.andWhere('lesson.startDate BETWEEN :startDate AND :endDate', {
        startDate,
        endDate,
      });
    }

    if (params.activityTypeId) {
      qb.andWhere('activityType.id = :id', {
        id: params.activityTypeId,
      });
    }

    if (params.auditoriumId) {
      qb.andWhere('auditorium.id = :id', {
        id: params.auditoriumId,
      });
    }

    if (params.lessonTypeId) {
      qb.andWhere('lessonType.id = :id', {
        id: params.lessonTypeId,
      });
    }

    if (params.groupId && params.sportsmanId) {
      qb.andWhere('(group.id = :groupId OR sportsman.id = :sportsmanId)', {
        groupId: params.groupId,
        sportsmanId: params.sportsmanId,
      });
    } else if (params.groupId) {
      qb.andWhere('group.id = :groupId', { groupId: params.groupId });
    } else if (params.sportsmanId) {
      qb.andWhere('sportsman.id = :sportsmanId', {
        sportsmanId: params.sportsmanId,
      });
    }
    const tets = await qb.getMany();
    this.logger.log(tets);
    return tets;
  }

  async update(lessonId: number, input: UpdateLessonInput) {
    return await this.lessonRepository.manager.transaction(async (manager) => {
      const lesson = await manager.findOne(Lesson, {
        where: { id: lessonId },
        relations: DEFAULT_RELATIONS,
      });

      if (!lesson) {
        throw new Error(`Lesson with id ${lessonId} not found`);
      }

      if (input.startDate !== undefined)
        lesson.startDate = new Date(input.startDate);
      if (input.endDate !== undefined) lesson.endDate = new Date(input.endDate);
      if (input.activityTypeId !== undefined)
        lesson.activityType = { id: input.activityTypeId } as RbActivityType;
      if (input.auditoriumId !== undefined)
        lesson.auditorium = { id: input.auditoriumId } as RbAuditorium;
      if (input.lessonTypeId !== undefined)
        lesson.lessonType = { id: input.lessonTypeId } as RbLessonType;

      if (input.coaches) {
        await manager.delete(Lesson_Coach, { lesson: { id: lessonId } });

        const newCoaches = input.coaches.map((c) => {
          return manager.create(Lesson_Coach, {
            lesson: { id: lessonId } as Lesson,
            coach: { id: c.coachId } as Coach,
            role: c.role,
          });
        });

        await manager.save(newCoaches);

        lesson.lesson_coaches = newCoaches;
      }

      if (input.groupIds) {
        await manager.delete(Lesson_Group, { lesson: { id: lessonId } });
        if (input.groupIds.length > 0) {
          const newGroups = input.groupIds.map((groupId) =>
            manager.create(Lesson_Group, {
              lesson: { id: lessonId } as Lesson,
              group: { id: groupId } as PracticeGroup,
            }),
          );
          await manager.save(newGroups);
          lesson.lesson_group = newGroups;
        } else {
          lesson.lesson_group = [];
        }
      }

      if (input.sportsmanIds) {
        await manager.delete(Lesson_Sportsman, { lesson: { id: lessonId } });
        const newSportsmen = input.sportsmanIds.map((sportsmanId) =>
          manager.create(Lesson_Sportsman, {
            lesson: { id: lessonId } as Lesson,
            sportsman: { id: sportsmanId } as Sportsman,
          }),
        );
        await manager.save(newSportsmen);
        lesson.lesson_sportsmen = newSportsmen;
      }

      await manager.save(lesson);

      const updatedLesson = await manager.findOne(Lesson, {
        where: { id: lessonId },
        relations: DEFAULT_RELATIONS,
      });

      if (!updatedLesson) {
        throw new Error(`Lesson with id ${lessonId} not found`);
      }
      return updatedLesson;
    });
  }

  async delete(lessonId: number): Promise<DeleteResult> {
    return await this.lessonRepository.manager.transaction(async (manager) => {
      const lesson = await manager.findOne(Lesson, {
        where: { id: lessonId },
        relations: DEFAULT_RELATIONS,
      });

      if (!lesson) {
        throw new Error(`lesson is with id ${lessonId} not found`);
      }

      if (lesson.lesson_coaches.length > 0) {
        await manager.delete(Lesson_Coach, { lesson: { id: lessonId } });
      }

      if (lesson.lesson_group.length > 0) {
        await manager.delete(Lesson_Group, { lesson: { id: lessonId } });
      }

      if (lesson.lesson_sportsmen.length > 0) {
        await manager.delete(Lesson_Sportsman, { lesson: { id: lessonId } });
      }

      return manager.delete(Lesson, { id: lessonId });
    });
  }
}
