import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRbActivityTypeDto {
  @ApiProperty({
    name: 'activityType',
    example: 'офп',
    description: 'название типа тренировки',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
