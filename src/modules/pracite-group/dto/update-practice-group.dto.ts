import { PartialType } from '@nestjs/swagger';
import { CreatePracticeGroupDto } from './create-practice-group.dto';

export class UpdatePracticeGroupDto extends PartialType(
  CreatePracticeGroupDto,
) {}
