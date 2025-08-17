import { AbstractEntity } from './abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity('sportsman')
export class Sportsman extends AbstractEntity {
  @Column({ type: 'varchar' })
  lastName: string;

  @Column({ type: 'varchar' })
  firstName: string;

  @Column({ type: 'varchar' })
  patrName: string;

  @Column({ type: 'datetime', nullable: true })
  birthday: Date | null;

  //   todo добавить город
}
