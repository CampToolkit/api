import { Column, Entity } from 'typeorm';
import { AbstractEntity } from '../abstract.entity';

@Entity('rbLessonType')
export class RbLessonType extends AbstractEntity {
  @Column({ type: 'varchar', length: 256 })
  name: string;

  //   todo Lesson
}
