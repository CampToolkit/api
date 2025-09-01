import { ApiProperty } from '@nestjs/swagger';

import { Type } from 'class-transformer';
import { IsInt, Min } from 'class-validator';

export class UpdateLesson_SportsmanDto {
  @ApiProperty({
    example: 3,
    description: 'ID спортсмена',
    type: Number,
  })
  @Type(() => Number)
  @IsInt()
  @Min(1)
  sportsmanId: number;
}
