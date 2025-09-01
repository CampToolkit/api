import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';
import { Lesson_Coach } from '../../schedule/lesson_coach/lesson_coach.entity';
import { Camp } from '../../camps/camp/camp.entity';

@Entity('coach')
export class Coach extends AbstractEntity {
  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  patrName: string;

  @ManyToMany(() => Camp, (camp) => camp.coaches)
  camps: Camp[];

  @OneToMany(() => Lesson_Coach, (lesson_coach) => lesson_coach.coach)
  lesson_coaches: Lesson_Coach[];
}
