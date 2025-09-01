import { Column, Entity, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';

import { Lesson } from '../lesson/lesson.entity';

/*
 * @description пример:
 * прыжковая
 * скольжение
 * удочка
 * вращения
 * постановка программ
 * офп
 * сфп
 * ротатор
 * */

@Entity('rbActivityType')
export class RbActivityType extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => Lesson, (lesson) => lesson.activityType)
  lessons: Lesson[];
}
