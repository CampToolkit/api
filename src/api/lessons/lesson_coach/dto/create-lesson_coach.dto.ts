import { IsEnum, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { LessonCoachRole } from '../../../../db/db-module/schedule/lesson_coach/enums/LessonCoachRole';

export class CoachWithRoleDto {
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

export class CreateLessonCoachDto extends CoachWithRoleDto {
  @ApiProperty({
    example: 1,
    description: 'ID урока',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  lessonId: number;
}
