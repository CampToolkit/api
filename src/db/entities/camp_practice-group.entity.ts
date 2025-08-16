import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { Camp } from './camp.entity';
import { PracticeGroup } from './practice-group.entity';

@Entity('camp_practiceGroup')
export class CampSportsman extends AbstractEntity {
  @ManyToOne(() => Camp)
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @ManyToOne(() => PracticeGroup)
  @JoinColumn({ name: 'practiceGroupId' })
  practiceGroup: PracticeGroup;
}
