import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Camp_AuditoriumService } from './camp_auditorium.service';
import { AddAuditoriumToCampDto } from './dto/add_auditorium_to_camp_dto';
import { RemoveAuditoriumFromCampDto } from './dto/update-camp_auditorium.dto';

@Controller('camp/:id')
export class Camp_AuditoriumController {
  constructor(private readonly campAuditoriumService: Camp_AuditoriumService) {}

  @Get('auditorium')
  findAll(@Param('id', ParseIntPipe) id: number) {
    return this.campAuditoriumService.findAll(id);
  }

  @Post('add-auditorium')
  addAuditoriumToCamp(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddAuditoriumToCampDto,
  ) {
    return this.campAuditoriumService.create(id, dto.ids);
  }

  @Post('remove-auditorium')
  remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: RemoveAuditoriumFromCampDto,
  ) {
    return this.campAuditoriumService.remove(id, dto.ids);
  }
}
