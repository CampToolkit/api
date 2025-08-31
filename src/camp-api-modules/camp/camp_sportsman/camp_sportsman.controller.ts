import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { Camp_SportsmanService } from './camp_sportsman.service';
import { CreateCamp_SportsmanDto } from '../dto/create-camp_sportsman.dto';
import { RemoveCamp_SportsmanDto } from '../dto/remove-camp_sportsman.dto';

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
    @Body() dto: CreateCamp_SportsmanDto,
  ) {
    return this.camp_sportsmanService.create(id, dto.ids);
  }

  @Post('delete-sportsman')
  removeSportsmenFromCamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RemoveCamp_SportsmanDto,
  ) {
    return this.camp_sportsmanService.remove(id, dto.ids);
  }
}
