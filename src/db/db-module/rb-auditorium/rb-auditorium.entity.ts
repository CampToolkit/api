import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { AbstractEntity } from '../shared/abstract.entity';

import { Lesson } from '../schedule/lesson/lesson.entity';
import { Camp } from '../camps/camp/camp.entity';

@Entity('rbAuditorium')
export class RbAuditorium extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => Lesson, (lesson) => lesson.activityType)
  lessons: Lesson[];

  @ManyToMany(() => Camp, (camp) => camp.auditoriums, { onDelete: 'CASCADE' })
  camps: Camp[];
}
