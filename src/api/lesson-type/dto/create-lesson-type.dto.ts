import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLessonTypeDto {
  @ApiProperty({
    example: 'основная',
    description: 'основная или дополнительная тренировка',
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}
