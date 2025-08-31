import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class AddSportsmanToCampDto {
  @ApiProperty({
    description: 'Список ID спортсменов',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  ids: number[];
}
