import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Camp } from './camp/camp.entity';
import { PracticeGroup } from './practice-group.entity';
import { RbActivityType } from './schedule/rb-activity-type.entity';
import { RbLessonType } from './schedule/rb-lesson-type.entity';
import { RbAuditorium } from './schedule/rb-auditorium.entity';

@Entity('practiceSession')
export class PracticeSession extends AbstractEntity {
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
  @JoinColumn({ name: 'activityTypeId' })
  activityType: RbActivityType;

  @ManyToOne(() => RbLessonType, (type) => type.sessions, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'slotTypeId' })
  slotType: RbLessonType;

  @ManyToOne(() => RbAuditorium, (type) => type.sessions, {
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'auditoriumId' })
  auditorium: RbAuditorium;
}
