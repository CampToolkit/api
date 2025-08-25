import { IsDateString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Optional } from '@nestjs/common';

export class FindAllLessonsByDto {
  @ApiProperty({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsInt()
  campId: number;

  @ApiProperty({
    example: '2025-08-25T09:00:00.000Z',
    description: 'Дата начала',
  })
  @Optional()
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '3', description: 'ID типа активности' })
  @Optional()
  @Type(() => Number)
  @IsInt()
  activityTypeId: number;

  @ApiProperty({ example: '2', description: 'ID аудитории' })
  @Optional()
  @Type(() => Number)
  @IsInt()
  auditoriumId: number;

  @ApiProperty({ example: '5', description: 'ID типа урока' })
  @Optional()
  @Type(() => Number)
  @IsInt()
  lessonTypeId: number;
}
