import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { PracticeSession } from './practice-session.entity';
import { Camp } from './camp/camp.entity';
import { LessonGroupParticipants } from './schedule/lesson-group-participants.entity';
import { Sportsman } from './person/sportsman.entity';

@Entity('practiceGroup')
export class PracticeGroup extends AbstractEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => PracticeGroup, (group) => group.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'parentId' })
  parent?: PracticeGroup;

  @OneToMany(() => PracticeGroup, (practiceGroup) => practiceGroup.parent)
  children?: PracticeGroup[];

  @ManyToOne(() => Camp, (camp) => camp.practiceGroups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @ManyToMany(() => Sportsman, (sportsman) => sportsman.practiceGroups, {})
  @JoinTable({
    name: 'group_sportsman',
    joinColumn: { name: 'groupId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'sportsmanId', referencedColumnName: 'id' },
  })
  sportsman: Sportsman[];

  @OneToMany(
    () => LessonGroupParticipants,
    (lessonGroupParticipants) => lessonGroupParticipants.group,
  )
  lessonGroupParticipants: LessonGroupParticipants[];

  // todo удалить
  @OneToMany(() => PracticeSession, (session: PracticeSession) => session.camp)
  sessions: PracticeSession[];
}
