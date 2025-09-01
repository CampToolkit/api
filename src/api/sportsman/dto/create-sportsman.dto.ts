import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateSportsmanDto {
  @ApiProperty({
    example: 'Иванов',
    description: 'Фамилия спортсмена',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: 'Иван',
    description: 'Имя спортсмена',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Иванович',
    description: 'Отчество спортсмена (необязательно)',
  })
  @IsString()
  @IsNotEmpty()
  patrName: string;

  @ApiPropertyOptional({
    example: '2025-08-25T09:00:00.000Z',
    description: 'Дата рождения спортсмена (необязательно)',
  })
  @IsDateString()
  @IsOptional()
  birthDate: string;
}
