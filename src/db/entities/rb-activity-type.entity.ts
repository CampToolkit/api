import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { PracticeSession } from './practice-session.entity';

@Entity('rbActivityType')
export class RbActivityType extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => PracticeSession, (session: PracticeSession) => session.camp)
  sessions: PracticeSession[];
}
