import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Lesson_CoachService } from './lesson_coach.service';
import { CreateLessonCoachDto } from './dto/create-lesson_coach.dto';
import { UpdateLessonCoachDto } from './dto/update-lesson_coach.dto';

@Controller('lesson-coach')
export class Lesson_CoachController {
  constructor(private readonly lessonCoachService: Lesson_CoachService) {}

  @Post()
  create(@Body() createLessonCoachDto: CreateLessonCoachDto) {
    return this.lessonCoachService.create(createLessonCoachDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLessonCoachDto: UpdateLessonCoachDto,
  ) {
    return this.lessonCoachService.update(id, updateLessonCoachDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonCoachService.remove(+id);
  }
}
