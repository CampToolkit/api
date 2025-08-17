import { IsNumber, IsOptional, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePracticeGroupDto {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  parentId: number;

  @Type(() => Number)
  @IsNumber()
  campId: number;
}
