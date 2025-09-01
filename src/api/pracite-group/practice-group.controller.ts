import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  ParseIntPipe,
} from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { CreatePracticeGroupDto } from './dto/create-practice-group.dto';
import { UpdatePracticeGroupDto } from './dto/update-practice-group.dto';
import { CreatePracticeGroupBulkDto } from './dto/CreatePracticeGroupBulk.dto';

@Controller('practice-group')
export class PracticeGroupController {
  constructor(private readonly practiceGroupService: PracticeGroupService) {}

  @Post()
  create(@Body() createPracticeGroupDto: CreatePracticeGroupDto) {
    return this.practiceGroupService.create(createPracticeGroupDto);
  }

  @Post('bulk')
  createMany(@Body() dto: CreatePracticeGroupBulkDto) {
    return this.practiceGroupService.createMany(dto.items);
  }

  @Get()
  findAll() {
    return this.practiceGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.findOne(id);
  }

  @Get('camp/:id')
  findAllByCamp(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.findAllByCamp(id);
  }

  @Get('camp')
  invalidCamp() {
    throw new BadRequestException('id обязателен');
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePracticeGroupDto: UpdatePracticeGroupDto,
  ) {
    return this.practiceGroupService.update(id, updatePracticeGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.remove(id);
  }
}
