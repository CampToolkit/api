import { Module } from '@nestjs/common';
import { LessonTypeService } from './lesson-type.service';
import { LessonTypeController } from './lesson-type.controller';
import { DbModule } from '../../db/db-module/db.module';

@Module({
  imports: [DbModule],
  controllers: [LessonTypeController],
  providers: [LessonTypeService],
})
export class LessonTypeModule {}
