import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Lesson_SportsmanService } from './lesson_sportsman.service';
import { CreateLesson_SportsmanDto } from './dto/create_lesson__sportsman_dto';
import { UpdateLesson_SportsmanDto } from './dto/update_lesson__sportsman_dto';

@Controller('lesson-sportsman')
export class Lesson_SportsmanController {
  constructor(
    private readonly lessonSportsmanParticipantsService: Lesson_SportsmanService,
  ) {}

  @Post()
  create(
    @Body()
    createLessonSportsmanParticipantDto: CreateLesson_SportsmanDto,
  ) {
    return this.lessonSportsmanParticipantsService.create(
      createLessonSportsmanParticipantDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body()
    updateLessonSportsmanParticipantDto: UpdateLesson_SportsmanDto,
  ) {
    return this.lessonSportsmanParticipantsService.update(
      id,
      updateLessonSportsmanParticipantDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonSportsmanParticipantsService.remove(id);
  }
}
