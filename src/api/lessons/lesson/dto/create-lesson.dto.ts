import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsDateString,
  IsArray,
  ValidateNested,
  IsOptional,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CoachWithRoleDto } from '../../lesson_coach/dto/create-lesson_coach.dto';
import { LessonCoachRole } from '../../../../db/db-module/schedule/lesson_coach/enums/LessonCoachRole';

export class CreateLessonDto {
  @ApiProperty({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsInt()
  @Min(1)
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

  @ApiPropertyOptional({
    type: [CoachWithRoleDto],
    description: 'Список тренеров с ролями',
    example: [
      { coachId: 1, role: LessonCoachRole.PRIMARY },
      { coachId: 2, role: LessonCoachRole.SECONDARY },
    ],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CoachWithRoleDto)
  coaches: CoachWithRoleDto[];

  @ApiPropertyOptional({
    type: [Number],
    example: [1, 2, 3],
    description: 'массив ID групп, участвующих в Event',
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Min(1, {
    each: true,
    message: 'Каждый элемент groupIds должен быть больше 0',
  })
  groupIds: number[];

  @ApiPropertyOptional({
    type: [Number],
    example: [1, 2, 3],
    description: 'массив ID спортсменов, участвующих в Event',
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  @Min(1, {
    each: true,
    message: 'Каждый элемент sportsmanIds должен быть больше 0',
  })
  sportsmanIds: number[];
}
