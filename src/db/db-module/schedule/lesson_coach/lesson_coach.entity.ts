import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';
import { Lesson } from '../lesson/lesson.entity';
import { Coach } from '../../persons/coach/coach.entity';

@Entity('lesson_coach')
export class Lesson_Coach extends AbstractEntity {
  @PrimaryColumn()
  lessonId: number;

  @PrimaryColumn()
  coachId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_coaches, {
    onDelete: 'CASCADE',
  })
  lesson: Lesson;

  @ManyToOne(() => Coach, (coach) => coach.lesson_coaches, {
    onDelete: 'CASCADE',
  })
  coach: Coach;

  @Column({
    type: 'enum',
    enum: ['PRIMARY', 'SECONDARY'],
    default: 'PRIMARY',
  })
  role: 'PRIMARY' | 'SECONDARY';
}
