import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';
import { Camp } from './camp.entity';
import { Sportsman } from '../person/sportsman.entity';

@Entity('camp_sportsman')
export class CampSportsman extends AbstractEntity {
  @ManyToOne(() => Camp)
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @ManyToOne(() => Sportsman)
  @JoinColumn({ name: 'sportsmanId' })
  sportsman: Sportsman;
}
