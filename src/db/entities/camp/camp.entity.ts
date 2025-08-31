import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

import { PracticeGroup } from '../practice-group.entity';
import { Sportsman } from '../person/sportsman.entity';
import { RbAuditorium } from '../schedule/rb-auditorium.entity';
import { Coach } from '../person/coach.entity';

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

  @ManyToMany(() => Sportsman, (sportsman) => sportsman.camps)
  @JoinTable({
    name: 'camp_sportsman',
    joinColumn: { name: 'campId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'sportsmanId', referencedColumnName: 'id' },
  })
  sportsmen: Sportsman[];

  @OneToMany(() => PracticeGroup, (group) => group.camp)
  practiceGroups: PracticeGroup[];

  @ManyToMany(() => RbAuditorium, (auditorium) => auditorium.camps)
  @JoinTable({
    name: 'camp_auditorium',
    joinColumn: { name: 'campId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'auditoriumId', referencedColumnName: 'id' },
  })
  auditoriums: RbAuditorium[];

  @ManyToMany(() => Coach, (coach) => coach.camps)
  @JoinTable({
    name: 'camp_coach',
    joinColumn: { name: 'campId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'coachId', referencedColumnName: 'id' },
  })
  coaches: Coach[];
}
