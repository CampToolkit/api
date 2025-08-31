import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

import { Lesson_Sportsman } from '../schedule/lesson_sportsman.entity';
import { PracticeGroup } from '../practice-group.entity';
import { Camp } from '../camp/camp.entity';

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

  @ManyToMany(() => Camp, (camp) => camp.sportsmen)
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
