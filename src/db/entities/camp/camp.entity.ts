import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { PracticeSession } from '../practice-session.entity';
import { PracticeGroup } from '../practice-group.entity';

@Entity('camp')
export class Camp extends AbstractEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @Column({ type: 'varchar', length: 255 })
  city: string;

  @OneToMany(() => PracticeGroup, (group) => group.camp)
  practiceGroups: PracticeGroup[];

  // todo удалить
  @OneToMany(() => PracticeSession, (session: PracticeSession) => session.camp)
  sessions: PracticeSession[];
}
