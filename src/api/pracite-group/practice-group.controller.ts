import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { CreatePracticeGroupDto } from './dto/create-practice-group.dto';
import { UpdatePracticeGroupDto } from './dto/update-practice-group.dto';
import { CreatePracticeGroupBulkDto } from './dto/CreatePracticeGroupBulk.dto';
import { FindAllDto } from './dto/FindAll.dto';

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
  findAll(@Query('campId') dto: FindAllDto) {
    return this.practiceGroupService.findAll(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.findOne(id);
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
