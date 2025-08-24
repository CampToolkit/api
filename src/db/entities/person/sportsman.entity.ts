import { AbstractEntity } from '../abstract.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { LessonSportsmanParticipants } from '../schedule/lesson-sportsman-participants.entity';

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

  @OneToMany(
    () => LessonSportsmanParticipants,
    (lessonSportsman) => lessonSportsman.sportsman,
  )
  sportsmanParticipant: LessonSportsmanParticipants[];

  //   todo добавить город
}
