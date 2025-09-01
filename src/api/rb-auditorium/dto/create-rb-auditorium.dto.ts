import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRbAuditoriumDto {
  @ApiProperty({
    example: 'хореографический зал',
    description: 'название помещения',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
