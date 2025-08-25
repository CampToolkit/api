import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateLessonDto {
  @ApiProperty({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsInt()
  campId: number;

  @ApiProperty({
    example: '2025-08-25T09:00:00.000Z',
    description: 'Дата начала',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    example: '2025-08-25T11:00:00.000Z',
    description: 'Дата окончания',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({ example: '3', description: 'ID типа активности' })
  @Type(() => Number)
  @IsInt()
  activityTypeId: number;

  @ApiProperty({ example: '2', description: 'ID аудитории' })
  @Type(() => Number)
  @IsInt()
  auditoriumId: number;

  @ApiProperty({ example: '5', description: 'ID типа урока' })
  @Type(() => Number)
  @IsInt()
  lessonTypeId: number;
}
