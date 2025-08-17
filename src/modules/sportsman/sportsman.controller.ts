import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Logger,
  NotFoundException,
  ValidationPipe,
  UsePipes,
  BadRequestException,
} from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { CreateSportsmanDto } from './dto/create-sportsman.dto';
import { UpdateSportsmanDto } from './dto/update-sportsman.dto';
import { FindSportsmanByCampDto } from './dto/find-all-bycamp-sportsman.dto';

@Controller('sportsman')
export class SportsmanController {
  constructor(private readonly sportsmanService: SportsmanService) {}
  logger = new Logger('SportsmanController');
  @Post()
  create(@Body() createSportsmanDto: CreateSportsmanDto) {
    return this.sportsmanService.create(createSportsmanDto);
  }

  @Get()
  findAll() {
    return this.sportsmanService.findAll();
  }

  @Get('camp/:id')
  findAllByCamp(@Param() params: FindSportsmanByCampDto) {
    return this.sportsmanService.findAllByCamp(params.id);
  }

  @Get('camp')
  invalidCamp() {
    throw new BadRequestException('id обязателен');
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
