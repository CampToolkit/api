import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Lesson } from './lesson.entity';
import { PracticeGroup } from '../practice-group.entity';
import { AbstractEntity } from '../abstract.entity';

@Entity('lesson_group_participants')
export class LessonGroupParticipants extends AbstractEntity {
  @PrimaryColumn()
  lessonId: number;

  @PrimaryColumn()
  groupId: number;

  @ManyToOne(() => Lesson, (lesson) => lesson.lessonGroup, {
    onDelete: 'CASCADE',
  })
  lesson: Lesson;

  @ManyToOne(() => PracticeGroup, (group) => group.lessonGroupParticipants, {
    onDelete: 'CASCADE',
  })
  group: PracticeGroup;
}
