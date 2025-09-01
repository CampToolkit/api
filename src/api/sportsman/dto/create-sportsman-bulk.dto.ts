import { Type } from 'class-transformer';
import { ValidateNested, ArrayMinSize, IsArray } from 'class-validator';
import { CreateSportsmanDto } from './create-sportsman.dto';

export class CreateSportsmanBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSportsmanDto)
  @ArrayMinSize(1)
  items: CreateSportsmanDto[];
}
