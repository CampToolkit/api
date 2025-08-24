import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { PracticeSession } from './practice-session.entity';
import { Camp } from './camp.entity';
import { LessonGroupParticipants } from './schedule/lesson-group-participants.entity';

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
    onDelete: 'CASCADE', // если лагерь удалят, все его группы тоже удалятся
  })
  @JoinColumn({ name: 'campId' }) // явное имя колонки
  camp: Camp;

  @OneToMany(
    () => LessonGroupParticipants,
    (lessonGroupParticipants) => lessonGroupParticipants.group,
  )
  lessonGroupParticipants: LessonGroupParticipants[];

  // todo удалить
  @OneToMany(() => PracticeSession, (session: PracticeSession) => session.camp)
  sessions: PracticeSession[];
}
