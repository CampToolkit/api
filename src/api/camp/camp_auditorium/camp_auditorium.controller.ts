import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { Camp_AuditoriumService } from './camp_auditorium.service';
import { AddAuditoriumBulkToCampDto } from './dto/add_auditorium_to_camp_dto';
import { RemoveAuditoriumBulkFromCampDto } from './dto/remove-camp_auditorium.dto';

@Controller('camp/:campId/auditorium')
export class Camp_AuditoriumController {
  constructor(private readonly campAuditoriumService: Camp_AuditoriumService) {}

  @Get()
  findAll(@Param('campId', ParseIntPipe) campId: number) {
    return this.campAuditoriumService.findAll(campId);
  }

  @Post()
  addManyAuditoriumToCamp(
    @Param('campId', ParseIntPipe) campId: number,
    @Body() dto: AddAuditoriumBulkToCampDto,
  ) {
    return this.campAuditoriumService.createMany(campId, dto.items);
  }

  @Delete()
  remove(
    @Param('campId', ParseIntPipe) campId: number,
    @Body() dto: RemoveAuditoriumBulkFromCampDto,
  ) {
    return this.campAuditoriumService.remove(campId, dto.items);
  }
}
