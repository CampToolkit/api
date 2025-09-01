import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Camp_CoachService } from './camp_coach.service';
import { AddCoachToCampDto } from './dto/add-coach-to-camp.dto';
import { RemoveCoachFromCampDto } from './dto/remove-coach-from-camp.dto';

@Controller('camp/:id')
export class Camp_CoachController {
  constructor(private readonly camp_CoachService: Camp_CoachService) {}

  @Post('add-coach')
  addCoachToCamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddCoachToCampDto,
  ) {
    return this.camp_CoachService.create(id, dto.ids);
  }

  @Get()
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.camp_CoachService.findAll(id);
  }

  @Post('remove-coach')
  remove(
    @Param('id') id: number,

    @Body() dto: RemoveCoachFromCampDto,
  ) {
    return this.camp_CoachService.remove(id, dto.ids);
  }
}
