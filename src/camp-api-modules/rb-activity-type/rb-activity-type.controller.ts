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
import { RbActivityTypeService } from './rb-activity-type.service';
import { CreateRbActivityTypeDto } from './dto/create-rb-activity-type.dto';
import { UpdateRbActivityTypeDto } from './dto/update-rb-activity-type.dto';

@Controller('activity-type')
export class RbActivityTypeController {
  constructor(private readonly rbActivityTypeService: RbActivityTypeService) {}

  @Post()
  create(@Body() createRbActivityTypeDto: CreateRbActivityTypeDto) {
    return this.rbActivityTypeService.create(createRbActivityTypeDto);
  }

  @Get()
  findAll() {
    return this.rbActivityTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.rbActivityTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateRbActivityTypeDto: UpdateRbActivityTypeDto,
  ) {
    return this.rbActivityTypeService.update(id, updateRbActivityTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.rbActivityTypeService.remove(id);
  }
}
