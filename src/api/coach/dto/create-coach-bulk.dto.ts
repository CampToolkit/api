import { CreateCoachDto } from './create-coach.dto';
import { ArrayMinSize, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCoachBulkDto {
  @ValidateNested()
  @Type(() => CreateCoachDto)
  @ArrayMinSize(1)
  items: CreateCoachDto[];
}
