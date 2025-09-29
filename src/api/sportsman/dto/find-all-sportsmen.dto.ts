import { Transform } from 'class-transformer';
import { IsArray, IsIn, IsOptional } from 'class-validator';
import { Sportsman } from '../../../db/db-module/persons/sportsman/sportsman.entity';
import { EntityIncludes } from '../../../db/db-module/shared/types/entity-includes.type';
import { SPORTSMAN_INCLUDES } from '../const/sportsman-includes.const';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class FindAllSportsmenDto {
  @ApiPropertyOptional({
    type: 'array',
    description: 'ключи родственных сущностей',
    example: ['camps', 'practiceGroups', 'lesson_sportsmen'],
  })
  @IsOptional()
  @Transform(({ value }) => {
    if (!value) return [] as EntityIncludes<Sportsman>[];
    if (typeof value === 'string')
      return value.split(',') as EntityIncludes<Sportsman>[];
    if (Array.isArray(value)) return value as EntityIncludes<Sportsman>[];
    return [];
  })
  @IsArray()
  @IsIn(SPORTSMAN_INCLUDES, {
    each: true,
    message: 'Invalid relation key in includes',
  })
  includes?: EntityIncludes<Sportsman>[];
}
