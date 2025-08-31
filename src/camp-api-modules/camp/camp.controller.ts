import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CampService } from './camp.service';
import { CreateCampDto } from './dto/create-camp.dto';
import { UpdateCampDto } from './dto/update-camp.dto';

@Controller('camp')
export class CampController {
  constructor(private readonly campService: CampService) {}

  @Post()
  create(@Body() createCampDto: CreateCampDto) {
    return this.campService.create(createCampDto);
  }

  @Get()
  findAll() {
    return this.campService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.campService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCampDto: UpdateCampDto,
  ) {
    return this.campService.update(id, updateCampDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.campService.remove(id);
  }
}
