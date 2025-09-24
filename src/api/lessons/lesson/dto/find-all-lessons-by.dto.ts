import { IsOptional, IsDateString, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class FindAllLessonsByDto {
  @ApiProperty({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsInt()
  campId: number;

  @ApiPropertyOptional({
    example: '2025-08-25T09:00:00.000Z',
    description: 'Дата начала',
  })
  @IsOptional()
  @IsDateString()
  startDate: string;

  @ApiPropertyOptional({ example: '3', description: 'ID типа активности' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  activityTypeId: number;

  @ApiPropertyOptional({ example: '2', description: 'ID аудитории' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  auditoriumId: number;

  @ApiPropertyOptional({ example: '5', description: 'ID типа урока' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  lessonTypeId: number;

  @ApiPropertyOptional({ example: 1, description: 'ID группы' })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  groupId: number;
}
