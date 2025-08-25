import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class UpdateLessonGroupParticipantDto {
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
