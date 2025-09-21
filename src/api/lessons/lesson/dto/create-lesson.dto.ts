import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsInt,
  IsDateString,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
  CoachWithRoleDto,
  LessonCoachRole,
} from '../../lesson_coach/dto/create-lesson_coach.dto';

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
  @ArrayNotEmpty()
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
  @ArrayNotEmpty()
  @IsInt({ each: true })
  groupIds: number[];

  @ApiPropertyOptional({
    type: [Number],
    example: [1, 2, 3],
    description: 'массив ID спортсменов, участвующих в Event',
  })
  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  sportsmanIds: number[];
}
