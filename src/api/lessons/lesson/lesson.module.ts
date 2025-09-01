import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { DbModule } from '../../../db/db-module/db.module';

@Module({
  imports: [DbModule],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
