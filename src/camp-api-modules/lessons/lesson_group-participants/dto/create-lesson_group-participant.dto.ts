import { IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateLessonGroupParticipantDto {
  @ApiProperty({
    example: 10,
    description: 'ID урока',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  lessonId: number;

  @ApiProperty({
    example: 3,
    description: 'ID группы',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  groupId: number;
}
