import { InjectRepository } from '@nestjs/typeorm';
import { Lesson_Coach } from '../../../entities/schedule/lesson_coach.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DbLesson_CoachService {
  constructor(
    @InjectRepository(Lesson_Coach)
    private lessonCoachRepository: Repository<Lesson_Coach>,
  ) {}

  create(params: {
    lessonId: number;
    coachId: number;
    role: 'PRIMARY' | 'SECONDARY';
  }) {
    const lessonCoach = this.lessonCoachRepository.create(params);
    return this.lessonCoachRepository.save(lessonCoach);
  }

  async update(
    id: number,
    params: Partial<{
      coachId: number;
      role: 'PRIMARY' | 'SECONDARY';
    }>,
  ) {
    const lessonCoach = await this.lessonCoachRepository.findOneBy({ id });
    if (!lessonCoach) {
      throw new Error(`lesson_coach with id: ${id} not found`);
    }

    if (params.coachId) {
      lessonCoach.coachId = params.coachId;
    }
    return this.lessonCoachRepository.update(id, params);
  }

  delete(id: number) {
    return this.lessonCoachRepository.softDelete(id);
  }
}
