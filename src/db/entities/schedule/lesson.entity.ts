import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { RbActivityType } from './rb-activity-type.entity';
import { RbAuditorium } from './rb-auditorium.entity';
import { Lesson_Coach } from './lesson_coach.entity';
import { RbLessonType } from './rb-lesson-type.entity';
import { LessonGroupParticipants } from './lesson-group-participants.entity';
import { LessonSportsmanParticipants } from './lesson-sportsman-participants.entity';

@Entity('lesson')
export class Lesson extends AbstractEntity {
  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @OneToMany(() => Lesson_Coach, (lesson_coach) => lesson_coach.lesson)
  lessonCoaches: Lesson_Coach[];

  @ManyToOne(() => RbActivityType, (activityType) => activityType.lessons)
  activityType: RbActivityType;

  @ManyToOne(() => RbAuditorium, (auditorium) => auditorium.lessons)
  auditorium: RbAuditorium;

  @ManyToOne(() => RbLessonType)
  lessonType: RbLessonType;

  @OneToMany(() => LessonGroupParticipants, (lessonGroup) => lessonGroup.lesson)
  lessonGroup: LessonGroupParticipants[];

  @OneToMany(
    () => LessonSportsmanParticipants,
    (lessonSportsman) => lessonSportsman.lesson,
  )
  lessonSportsman: LessonSportsmanParticipants[];
}
