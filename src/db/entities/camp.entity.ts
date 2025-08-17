import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Session } from './session.entity';
import { PracticeGroup } from './practice-group.entity';

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

  @OneToMany(() => Session, (session: Session) => session.camp)
  sessions: Session[];

  @OneToMany(() => PracticeGroup, (group) => group.camp)
  practiceGroups: PracticeGroup[];
}
