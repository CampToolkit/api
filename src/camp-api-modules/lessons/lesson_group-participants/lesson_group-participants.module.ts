import { Module } from '@nestjs/common';
import { LessonGroupParticipantsService } from './lesson_group-participants.service';
import { LessonGroupParticipantsController } from './lesson_group-participants.controller';
import { DbModule } from '../../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [LessonGroupParticipantsController],
  providers: [LessonGroupParticipantsService],
})
export class LessonGroupParticipantsModule {}
