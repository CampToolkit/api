import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { LessonGroupParticipantsService } from './lesson_group-participants.service';
import { CreateLessonGroupParticipantDto } from './dto/create-lesson_group-participant.dto';
import { UpdateLessonGroupParticipantDto } from './dto/update-lesson_group-participant.dto';

@Controller('lesson/group')
export class LessonGroupParticipantsController {
  constructor(
    private readonly lessonGroupParticipantsService: LessonGroupParticipantsService,
  ) {}

  @Post()
  create(
    @Body() createLessonGroupParticipantDto: CreateLessonGroupParticipantDto,
  ) {
    return this.lessonGroupParticipantsService.create(
      createLessonGroupParticipantDto,
    );
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLessonGroupParticipantDto: UpdateLessonGroupParticipantDto,
  ) {
    return this.lessonGroupParticipantsService.update(
      id,
      updateLessonGroupParticipantDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonGroupParticipantsService.remove(id);
  }
}
