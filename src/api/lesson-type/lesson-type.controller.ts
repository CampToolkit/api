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
import { LessonTypeService } from './lesson-type.service';
import { CreateLessonTypeDto } from './dto/create-lesson-type.dto';
import { UpdateLessonTypeDto } from './dto/update-lesson-type.dto';

@Controller('lesson-type')
export class LessonTypeController {
  constructor(private readonly lessonTypeService: LessonTypeService) {}

  @Post()
  create(@Body() createLessonTypeDto: CreateLessonTypeDto) {
    return this.lessonTypeService.create(createLessonTypeDto);
  }

  @Get()
  findAll() {
    return this.lessonTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lessonTypeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLessonTypeDto: UpdateLessonTypeDto,
  ) {
    return this.lessonTypeService.update(id, updateLessonTypeDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonTypeService.remove(id);
  }
}
