import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Lesson } from './lesson.entity';
import { PracticeGroup } from '../practice-group.entity';
import { AbstractEntity } from '../abstract.entity';

@Entity('lesson_group')
export class Lesson_Group extends AbstractEntity {
  @ManyToOne(() => Lesson, (lesson) => lesson.lesson_group, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'lessonId' })
  lesson: Lesson;

  @ManyToOne(() => PracticeGroup, (group) => group.lesson_group, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'practiceGroupId' })
  group: PracticeGroup;
}
