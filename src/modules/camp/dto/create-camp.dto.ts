import { IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCampDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;
}
