import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCoachDto {
  @ApiProperty({
    example: 'Иванов',
    description: 'Фамилия тренера',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    example: 'Иван',
    description: 'Имя тренера',
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    example: 'Иванович',
    description: 'Отчество тренера',
  })
  @IsString()
  patrName: string;
}
