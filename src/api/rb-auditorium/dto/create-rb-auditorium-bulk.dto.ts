import { CreateRbAuditoriumDto } from './create-rb-auditorium.dto';
import { ArrayMaxSize, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateRbAuditoriumBulkDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateRbAuditoriumDto)
  @ArrayMaxSize(1)
  items: CreateRbAuditoriumDto[];
}
