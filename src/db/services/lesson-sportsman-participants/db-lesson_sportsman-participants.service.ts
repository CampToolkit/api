import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lesson_Sportsman } from '../../entities/schedule/lesson_sportsman.entity';
import { Repository } from 'typeorm';
import { Sportsman } from '../../entities/person/sportsman.entity';
import { Lesson } from '../../entities/schedule/lesson.entity';

@Injectable()
export class DbLesson_SportsmanParticipantsService {
  constructor(
    @InjectRepository(Lesson_Sportsman)
    private lessonSportsmanRepository: Repository<Lesson_Sportsman>,
  ) {}

  async create(params: { lessonId: number; sportsmanId: number }) {
    const existingRecord = await this.lessonSportsmanRepository.findOne({
      where: {
        lesson: { id: params.lessonId },
        sportsman: { id: params.sportsmanId },
      },
    });
    if (existingRecord) {
      throw new Error(
        `Sportsman with id: ${params.sportsmanId} has already signed up for this lesson with id ${params.lessonId}.`,
      );
    }
    const lesson_sportsman = this.lessonSportsmanRepository.create({
      lesson: { id: params.lessonId } as Lesson,
      sportsman: { id: params.sportsmanId } as Sportsman,
    });
    return this.lessonSportsmanRepository.save(lesson_sportsman);
  }

  async update(id: number, params: { sportsmanId: number }) {
    const lesson_sportsman = await this.lessonSportsmanRepository.findOne({
      where: { id },
    });

    if (!lesson_sportsman) {
      throw new Error(`lesson_sportsman with  Id: ${id}  not found`);
    }
    lesson_sportsman.sportsman = { id: params.sportsmanId } as Sportsman;
    return this.lessonSportsmanRepository.save(lesson_sportsman);
  }

  remove(id: number) {
    return this.lessonSportsmanRepository.softDelete(id);
  }
}
