import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';
import { RbActivityType } from '../rb-activity-type/rb-activity-type.entity';
import { RbAuditorium } from '../../rb-auditorium/rb-auditorium.entity';
import { Lesson_Coach } from '../lesson_coach/lesson_coach.entity';
import { RbLessonType } from '../lesson-type/rb-lesson-type.entity';
import { Lesson_Group } from '../lesson-group-participants/lesson_group.entity';
import { Lesson_Sportsman } from '../lesson-sportsman-participants/lesson_sportsman.entity';
import { Camp } from '../../camps/camp/camp.entity';

@Entity('lesson')
export class Lesson extends AbstractEntity {
  @ManyToOne(() => Camp)
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @OneToMany(() => Lesson_Coach, (lesson_coach) => lesson_coach.lesson)
  lesson_coaches: Lesson_Coach[];

  @ManyToOne(() => RbActivityType, (activityType) => activityType.lessons)
  @JoinColumn({ name: 'activityTypeId' })
  activityType: RbActivityType;

  @ManyToOne(() => RbAuditorium, (auditorium) => auditorium.lessons)
  auditorium: RbAuditorium;

  @ManyToOne(() => RbLessonType)
  lessonType: RbLessonType;

  @OneToMany(() => Lesson_Group, (lessonGroup) => lessonGroup.lesson)
  lesson_group: Lesson_Group[];

  @OneToMany(
    () => Lesson_Sportsman,
    (lessonSportsman) => lessonSportsman.lesson,
  )
  lesson_sportsmen: Lesson_Sportsman[];
}
