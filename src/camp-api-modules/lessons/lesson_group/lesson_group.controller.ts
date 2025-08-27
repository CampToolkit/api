import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { Lesson_GroupService } from './lesson_group.service';
import { CreateLesson_GroupDto } from './dto/create-lesson_group.dto';
import { UpdateLesson_GroupDto } from './dto/update-lesson_group.dto';

@Controller('lesson/group')
export class Lesson_GroupController {
  constructor(
    private readonly lessonGroupParticipantsService: Lesson_GroupService,
  ) {}

  @Post()
  create(@Body() createLesson_GroupDto: CreateLesson_GroupDto) {
    return this.lessonGroupParticipantsService.create(createLesson_GroupDto);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLesson_GroupDto: UpdateLesson_GroupDto,
  ) {
    return this.lessonGroupParticipantsService.update(
      id,
      updateLesson_GroupDto,
    );
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonGroupParticipantsService.remove(id);
  }
}
