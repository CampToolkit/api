import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';

export class FindAllDto {
  @ApiPropertyOptional({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  campId: number;
}
