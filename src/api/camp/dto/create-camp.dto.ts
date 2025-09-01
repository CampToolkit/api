import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCampDto {
  @ApiProperty({ example: 'Новый лагерь', description: 'название лагеря' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'Лукоянов', description: 'название города' })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: '2025-12-21', description: 'дата начала лагеря' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2025-12-31', description: 'дата окончания лагеря' })
  @IsDateString()
  endDate: string;
}
