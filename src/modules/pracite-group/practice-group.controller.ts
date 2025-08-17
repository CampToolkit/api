import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
} from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { CreatePracticeGroupDto } from './dto/create-practice-group.dto';
import { UpdatePracticeGroupDto } from './dto/update-practice-group.dto';

@Controller('practice-group')
export class PracticeGroupController {
  constructor(private readonly practiceGroupService: PracticeGroupService) {}

  @Post()
  create(@Body() createPracticeGroupDto: CreatePracticeGroupDto) {
    return this.practiceGroupService.create(createPracticeGroupDto);
  }

  @Get()
  findAll() {
    return this.practiceGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.practiceGroupService.findOne(Number(id));
  }

  @Get('camp/:id')
  findAllByCamp(@Param('id') id: string) {
    return this.practiceGroupService.findAllByCamp(Number(id));
  }

  @Get('camp')
  invalidCamp() {
    throw new BadRequestException('id обязателен');
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePracticeGroupDto: UpdatePracticeGroupDto,
  ) {
    return this.practiceGroupService.update(Number(id), updatePracticeGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.practiceGroupService.remove(Number(id));
  }
}
