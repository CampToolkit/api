import { PartialType } from '@nestjs/swagger';
import { CreateSportsmanDto } from './create-sportsman.dto';

export class UpdateSportsmanDto extends PartialType(CreateSportsmanDto) {}
