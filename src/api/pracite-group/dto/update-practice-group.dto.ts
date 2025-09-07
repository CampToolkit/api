import { ApiProperty } from '@nestjs/swagger';

import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdatePracticeGroupDto {
  @ApiProperty({ example: 'Старшая группа', description: 'название группы' })
  @IsString()
  @IsOptional()
  name: string;

  @ApiProperty({ example: '3', description: 'id родительской группы' })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  parentId: number;
}
