import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lesson } from './lesson.entity';
import { Sportsman } from '../person/sportsman.entity';

@Entity('lesson_sportsman_participants')
export class LessonSportsmanParticipants {
  @PrimaryColumn()
  lessonId: number;

  @PrimaryColumn()
  sportsmanId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lessonSportsman, {
    onDelete: 'CASCADE',
  })
  lesson: Lesson;

  @ManyToOne(() => Sportsman, (sportsman) => sportsman.sportsmanParticipant, {
    onDelete: 'CASCADE',
  })
  sportsman: Sportsman;
}
