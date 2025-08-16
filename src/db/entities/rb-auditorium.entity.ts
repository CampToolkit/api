import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Session } from './session.entity';

@Entity('rbAuditorium')
export class RbAuditorium extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => Session, (session: Session) => session.camp)
  sessions: Session[];
}
