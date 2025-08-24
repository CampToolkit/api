import { AbstractEntity } from '../abstract.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { LessonSportsmanParticipants } from '../schedule/lesson-sportsman-participants.entity';
import { PracticeGroup } from '../practice-group.entity';

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

  @ManyToMany(() => PracticeGroup, (group) => group.sportsman, {
    onDelete: 'CASCADE',
  })
  practiceGroups: PracticeGroup[];

  @OneToMany(
    () => LessonSportsmanParticipants,
    (lessonSportsman) => lessonSportsman.sportsman,
  )
  sportsmanParticipant: LessonSportsmanParticipants[];

  //   todo добавить город
}
