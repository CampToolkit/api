import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { AbstractEntity } from './abstract.entity';

import { Camp } from './camp/camp.entity';
import { Lesson_Group } from './schedule/lesson_group.entity';
import { Sportsman } from './person/sportsman.entity';

@Entity('practiceGroup')
export class PracticeGroup extends AbstractEntity {
  @Column({ type: 'varchar', length: 255 })
  name: string;

  @ManyToOne(() => PracticeGroup, (group) => group.children, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'parentId' })
  parent?: PracticeGroup;

  @OneToMany(() => PracticeGroup, (practiceGroup) => practiceGroup.parent)
  children?: PracticeGroup[];

  @ManyToOne(() => Camp, (camp) => camp.practiceGroups, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'campId' })
  camp: Camp;

  @ManyToMany(() => Sportsman, (sportsman) => sportsman.practiceGroups, {})
  @JoinTable({
    name: 'group_sportsman',
    joinColumn: { name: 'groupId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'sportsmanId', referencedColumnName: 'id' },
  })
  sportsman: Sportsman[];

  @OneToMany(
    () => Lesson_Group,
    (lessonGroupParticipants) => lessonGroupParticipants.group,
  )
  lesson_group: Lesson_Group[];
}
