import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { Camp_CoachService } from './camp_coach.service';
import { AddCoachBulkToCampDto } from './dto/add-coach-bulk-to-camp.dto';
import { RemoveCoachBulkFromCampDto } from './dto/remove-coach-bulk-from-camp.dto';

@Controller('camp/:campId/coach')
export class Camp_CoachController {
  constructor(private readonly camp_CoachService: Camp_CoachService) {}

  @Get()
  findAll(@Param('campId', ParseIntPipe) campId: number) {
    return this.camp_CoachService.findAll(campId);
  }

  @Post()
  addCoachToCamp(
    @Param('campId', ParseIntPipe) campId: number,
    @Body() dto: AddCoachBulkToCampDto,
  ) {
    return this.camp_CoachService.create(campId, dto.items);
  }

  @Delete()
  remove(
    @Param('campId') campId: number,

    @Body() dto: RemoveCoachBulkFromCampDto,
  ) {
    return this.camp_CoachService.remove(campId, dto.items);
  }
}
