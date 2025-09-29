import { EntityIncludes } from '../../../db/db-module/shared/types/entity-includes.type';
import { Sportsman } from '../../../db/db-module/persons/sportsman/sportsman.entity';

export const SPORTSMAN_INCLUDES: EntityIncludes<Sportsman>[] = [
  'camps',
  'practiceGroups',
  'lesson_sportsmen',
];
