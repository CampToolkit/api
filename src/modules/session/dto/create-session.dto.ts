import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsInt } from 'class-validator';

export class CreateSessionDto {
  @ApiProperty({ example: '2025-08-18T10:00:00Z' })
  @IsDateString()
  startDate: string;

  @ApiProperty({ example: '2025-08-18T12:00:00Z' })
  @IsDateString()
  endDate: string;

  @ApiProperty({ example: 1, description: 'ID лагеря' })
  @IsInt()
  campId: number;

  @ApiProperty({ example: 1, description: 'ID группы' })
  @IsInt()
  practiceGroupId: number;

  @ApiProperty({
    example: 2,
    description: 'ID типа активности (офп, сфп, лед и т.д.)',
  })
  @IsInt()
  activityTypeId: number;

  @ApiProperty({
    example: 3,
    description: 'ID типа слота (основная, дополнительная)',
  })
  @IsInt()
  slotTypeId: number;

  @ApiProperty({ example: 4, description: 'ID помещения' })
  @IsInt()
  auditoriumId: number;
}
