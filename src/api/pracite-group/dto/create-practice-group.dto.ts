import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePracticeGroupDto {
  @ApiProperty({ example: '1', description: 'ID лагеря' })
  @Type(() => Number)
  @IsNumber()
  campId: number;

  @ApiProperty({ example: 'Старшая группа', description: 'название группы' })
  @IsString()
  name: string;

  @ApiProperty({ example: '3', description: 'id родительской группы' })
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  parentId: number;
}
