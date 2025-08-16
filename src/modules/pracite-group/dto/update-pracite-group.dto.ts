import { PartialType } from '@nestjs/swagger';
import { CreatePraciteGroupDto } from './create-pracite-group.dto';

export class UpdatePraciteGroupDto extends PartialType(CreatePraciteGroupDto) {}
