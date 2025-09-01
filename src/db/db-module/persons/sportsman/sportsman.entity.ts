import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';

import { Lesson_Sportsman } from '../../schedule/lesson-sportsman-participants/lesson_sportsman.entity';
import { PracticeGroup } from '../../practice-group/practice-group.entity';
import { Camp } from '../../camps/camp/camp.entity';

@Entity('sportsman')
export class Sportsman extends AbstractEntity {
  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  patrName: string;

  @Column({ type: 'datetime', nullable: true })
  birthday: Date | null;

  @ManyToMany(() => Camp, (camp) => camp.sportsmen, { onDelete: 'CASCADE' })
  camps: Camp[];

  @ManyToMany(() => PracticeGroup, (group) => group.sportsman, {
    onDelete: 'CASCADE',
  })
  practiceGroups: PracticeGroup[];

  @OneToMany(
    () => Lesson_Sportsman,
    (lessonSportsman) => lessonSportsman.sportsman,
  )
  lesson_sportsmen: Lesson_Sportsman[];

  //   todo добавить город
}
