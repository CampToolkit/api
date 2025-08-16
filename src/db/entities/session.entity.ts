import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Camp } from './camp.entity';
import { PracticeGroup } from './practice-group.entity';
import { RbActivityType } from './rb-activity-type.entity';
import { RbSlotType } from './rb-slot-type.entity';
import { RbAuditorium } from './rb-auditorium.entity';

@Entity('session')
export class Session extends AbstractEntity {
  @Column({ type: 'datetime' })
  startDate: Date;

  @Column({ type: 'datetime' })
  endDate: Date;

  @ManyToOne(() => Camp, (camp) => camp.sessions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @ManyToOne(() => PracticeGroup, (group) => group.sessions, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'practiceGroupId' })
  practiceGroup: PracticeGroup;

  @ManyToOne(() => RbActivityType, (type) => type.sessions, {
    onDelete: 'SET NULL',
  })
  activityType: RbActivityType;

  @ManyToOne(() => RbSlotType, (type) => type.sessions, {
    onDelete: 'SET NULL',
  })
  slotType: RbSlotType;

  @ManyToOne(() => RbAuditorium, (type) => type.sessions, {
    onDelete: 'SET NULL',
  })
  auditorium: RbAuditorium;
}
