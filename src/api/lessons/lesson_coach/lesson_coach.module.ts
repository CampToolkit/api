import { Module } from '@nestjs/common';
import { Lesson_CoachService } from './lesson_coach.service';
import { Lesson_CoachController } from './lesson_coach.controller';
import { DbModule } from '../../../db/db-module/db.module';

@Module({
  imports: [DbModule],
  controllers: [Lesson_CoachController],
  providers: [Lesson_CoachService],
})
export class LessonCoachModule {}
