import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Lesson } from '../lesson/lesson.entity';
import { PracticeGroup } from '../../practice-group/practice-group.entity';
import { AbstractEntity } from '../../shared/abstract.entity';

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
