import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

import { PracticeGroup } from '../practice-group.entity';
import { Sportsman } from '../person/sportsman.entity';
import { RbAuditorium } from '../schedule/rb-auditorium.entity';

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
    joinColumn: { name: 'sportsmanId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'campId', referencedColumnName: 'id' },
  })
  sportsmen: Sportsman[];

  @OneToMany(() => PracticeGroup, (group) => group.camp)
  practiceGroups: PracticeGroup[];

  @ManyToMany(() => RbAuditorium, (auditorium) => auditorium.camps)
  @JoinTable({
    name: 'camp_auditorium',
    joinColumn: { name: 'auditoriumId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'auditoriumId', referencedColumnName: 'id' },
  })
  auditoriums: RbAuditorium[];
}
