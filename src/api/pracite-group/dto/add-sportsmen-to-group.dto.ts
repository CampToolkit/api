import { ApiProperty } from '@nestjs/swagger';
import { ArrayNotEmpty, IsArray, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class AddSportsmenToGroupDTO {
  @ApiProperty({ description: 'ID лагеря', example: 1, type: Number })
  @Type(() => Number)
  @IsInt()
  campId: number;

  @ApiProperty({
    description: 'Список ID спортсменов',
    example: [1, 2, 3],
    type: [Number],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => Number)
  @IsInt({ each: true })
  items: number[];
}
