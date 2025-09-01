import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Camp_SportsmanService } from './camp_sportsman.service';
import { AddSportsmanBulkToCampDto } from './dto/add_sportsman_to_camp_dto';
import { RemoveSportsmanBulkFromCampDto } from './dto/remove_sportsman_from_camp_dto';

@Controller('camp/:campId/sportsman')
export class Camp_SportsmanController {
  constructor(private camp_sportsmanService: Camp_SportsmanService) {}

  @Get()
  findAll(@Param('campId', ParseIntPipe) id: number) {
    return this.camp_sportsmanService.findAll(id);
  }

  @Post()
  addSportsmanBulkToCamp(
    @Param('campId', ParseIntPipe) campId: number,
    @Body() dto: AddSportsmanBulkToCampDto,
  ) {
    return this.camp_sportsmanService.create(campId, dto.items);
  }

  @Delete()
  removeSportsmanBulkFromCamp(
    @Param('campId', ParseIntPipe) campId: number,
    @Body() dto: RemoveSportsmanBulkFromCampDto,
  ) {
    return this.camp_sportsmanService.remove(campId, dto.items);
  }
}
