import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { Lesson } from './lesson.entity';
import { Coach } from '../person/coach.entity';

@Entity('lesson_coach')
export class Lesson_Coach extends AbstractEntity {
  @PrimaryColumn()
  lessonId: number;

  @PrimaryColumn()
  coachId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lessonCoaches, {
    onDelete: 'CASCADE',
  })
  lesson: Lesson;

  @ManyToOne(() => Coach, (coach) => coach.lessonCoaches, {
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
