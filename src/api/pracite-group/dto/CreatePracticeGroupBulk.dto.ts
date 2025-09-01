import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreatePracticeGroupDto } from './create-practice-group.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePracticeGroupBulkDto {
  @ApiProperty({
    type: [CreatePracticeGroupDto],
    description: 'Список групп для массового создания',
    example: '{items: [{campId: 1, name: "Лучшая группа", parentId?: 2 }]}',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePracticeGroupDto)
  @ArrayMinSize(1)
  items: CreatePracticeGroupDto[];
}
