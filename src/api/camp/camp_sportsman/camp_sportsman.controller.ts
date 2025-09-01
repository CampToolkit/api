import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Camp_SportsmanService } from './camp_sportsman.service';
import { AddSportsmanToCampDto } from './dto/add_sportsman_to_camp_dto';
import { RemoveSportsmanFromCampDto } from './dto/remove_sportsman_from_camp_dto';

@Controller('camp/:id')
export class Camp_SportsmanController {
  constructor(private camp_sportsmanService: Camp_SportsmanService) {}

  @Get('sportsman')
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.camp_sportsmanService.findAll(id);
  }

  @Post('add-sportsman')
  addSportsmenToCamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddSportsmanToCampDto,
  ) {
    return this.camp_sportsmanService.create(id, dto.ids);
  }

  @Post('remove-sportsman')
  removeSportsmenFromCamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RemoveSportsmanFromCampDto,
  ) {
    return this.camp_sportsmanService.remove(id, dto.ids);
  }
}
