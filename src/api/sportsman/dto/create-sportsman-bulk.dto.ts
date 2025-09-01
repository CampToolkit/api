import { Type } from 'class-transformer';
import { ValidateNested, ArrayMinSize, IsArray } from 'class-validator';
import { CreateSportsmanDto } from './create-sportsman.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateSportsmanBulkDto {
  @ApiProperty({
    type: [CreateSportsmanDto],
    description: 'Список спортсменов для массового создания',
    example: [
      {
        firstName: 'Иван',
        lastName: 'Иванов',
        campId: 1,
        birthDate: '2010-05-12',
      },
      {
        firstName: 'Петр',
        lastName: 'Петров',
        campId: 1,
        birthDate: '2011-08-03',
      },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSportsmanDto)
  @ArrayMinSize(1)
  items: CreateSportsmanDto[];
}
