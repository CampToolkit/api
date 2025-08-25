import { Module } from '@nestjs/common';
import { Lesson_CoachService } from './lesson_coach.service';
import { LessonCoachController } from './lesson_coach.controller';
import { DbModule } from '../../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [LessonCoachController],
  providers: [Lesson_CoachService],
})
export class LessonCoachModule {}
