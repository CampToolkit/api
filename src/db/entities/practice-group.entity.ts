import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Session } from './session.entity';

@Entity('practiceGroup')
export class PracticeGroup extends AbstractEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => PracticeGroup, (group) => group.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'parentId' })
  parentId?: number;

  children?: PracticeGroup[];

  @OneToMany(() => Session, (session: Session) => session.camp)
  sessions: Session[];
}
