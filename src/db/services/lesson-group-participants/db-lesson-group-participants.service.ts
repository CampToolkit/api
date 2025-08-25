import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessonGroupParticipants } from '../../entities/schedule/lesson-group-participants.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbLessonGroupParticipantsService {
  constructor(
    @InjectRepository(LessonGroupParticipants)
    private lessonGroupParticipantsRepository: Repository<LessonGroupParticipants>,
  ) {}

  async create(params: { lessonId: number; groupId: number }) {
    this.lessonGroupParticipantsRepository.create(params);
    return this.lessonGroupParticipantsRepository.save(params);
  }

  async update(id: number, params: { groupId: number }) {
    const lessonGroup = await this.lessonGroupParticipantsRepository.findOneBy({
      id,
    });
    if (!lessonGroup) {
      throw new Error('lessonGroup not found');
    }
    lessonGroup.groupId = params.groupId;
    return this.lessonGroupParticipantsRepository.save(lessonGroup);
  }

  remove(id: number) {
    return this.lessonGroupParticipantsRepository.softDelete(id);
  }
}
