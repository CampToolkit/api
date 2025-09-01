import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../../shared/abstract.entity';

/*
 * @description пример
 * основная
 * дополнительная
 **/

@Entity('rbLessonType')
export class RbLessonType extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;
}
