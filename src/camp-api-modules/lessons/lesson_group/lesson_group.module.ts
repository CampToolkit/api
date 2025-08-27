import { Module } from '@nestjs/common';
import { Lesson_GroupService } from './lesson_group.service';
import { Lesson_GroupController } from './lesson_group.controller';
import { DbModule } from '../../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [Lesson_GroupController],
  providers: [Lesson_GroupService],
})
export class Lesson_GroupModule {}
