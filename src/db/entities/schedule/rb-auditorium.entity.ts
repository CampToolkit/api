import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

import { Lesson } from './lesson.entity';

@Entity('rbAuditorium')
export class RbAuditorium extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => Lesson, (lesson) => lesson.activityType)
  lessons: Lesson[];
}
