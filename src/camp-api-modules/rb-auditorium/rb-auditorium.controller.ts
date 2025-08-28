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
import { RbAuditoriumService } from './rb-auditorium.service';
import { CreateRbAuditoriumDto } from './dto/create-rb-auditorium.dto';
import { UpdateRbAuditoriumDto } from './dto/update-rb-auditorium.dto';

@Controller('rb-auditorium')
export class RbAuditoriumController {
  constructor(private readonly rbAuditoriumService: RbAuditoriumService) {}

  @Post()
  create(@Body() createRbAuditoriumDto: CreateRbAuditoriumDto) {
    return this.rbAuditoriumService.create(createRbAuditoriumDto);
  }

  @Get()
  findAll() {
    return this.rbAuditoriumService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rbAuditoriumService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRbAuditoriumDto: UpdateRbAuditoriumDto,
  ) {
    return this.rbAuditoriumService.update(id, updateRbAuditoriumDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rbAuditoriumService.remove(id);
  }
}
