import { IsEnum, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum LessonCoachRole {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
}

export class CreateLessonCoachDto {
  @ApiProperty({
    example: 1,
    description: 'ID урока',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  lessonId: number;

  @ApiProperty({
    example: 5,
    description: 'ID тренера',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  coachId: number;

  @ApiProperty({
    example: LessonCoachRole.PRIMARY,
    enum: LessonCoachRole,
    description: 'Роль тренера',
  })
  @IsEnum(LessonCoachRole, {
    message: 'role must be either PRIMARY or SECONDARY',
  })
  role: LessonCoachRole;
}
