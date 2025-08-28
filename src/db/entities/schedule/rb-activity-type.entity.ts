import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

import { Lesson } from './lesson.entity';

@Entity('rbActivityType')
export class RbActivityType extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => Lesson, (lesson) => lesson.activityType)
  lessons: Lesson[];
}
