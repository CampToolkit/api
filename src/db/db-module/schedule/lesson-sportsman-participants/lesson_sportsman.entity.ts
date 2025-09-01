import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';
import { Sportsman } from '../../persons/sportsman/sportsman.entity';
import { AbstractEntity } from '../../shared/abstract.entity';

@Entity('lesson_sportsman')
export class Lesson_Sportsman extends AbstractEntity {
  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_sportsmen, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'lessonId' })
  lesson: Lesson;

  @ManyToOne(() => Sportsman, (sportsman) => sportsman.lesson_sportsmen, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'sportsmanId' })
  sportsman: Sportsman;
}
