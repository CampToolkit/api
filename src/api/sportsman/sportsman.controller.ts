import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  Query,
} from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { CreateSportsmanDto } from './dto/create-sportsman.dto';
import { UpdateSportsmanDto } from './dto/update-sportsman.dto';
import { CreateSportsmanBulkDto } from './dto/create-sportsman-bulk.dto';
import { EntityIncludes } from '../../db/db-module/shared/types/entity-includes.type';
import { Sportsman } from '../../db/db-module/persons/sportsman/sportsman.entity';
import { FindAllSportsmenDto } from './dto/find-all-sportsmen.dto';

@Controller('sportsman')
export class SportsmanController {
  constructor(private readonly sportsmanService: SportsmanService) {}
  logger = new Logger('SportsmanController');

  @Post()
  create(@Body() createSportsmanDto: CreateSportsmanDto) {
    return this.sportsmanService.create(createSportsmanDto);
  }

  @Post('bulk')
  createMany(@Body() dto: CreateSportsmanBulkDto) {
    return this.sportsmanService.createMany(dto.items);
  }

  @Get()
  findAll(@Query() query: FindAllSportsmenDto) {
    return this.sportsmanService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sportsmanService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSportsmanDto: UpdateSportsmanDto,
  ) {
    return this.sportsmanService.update(+id, updateSportsmanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sportsmanService.remove(+id);
  }
}
