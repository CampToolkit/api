import { Module } from '@nestjs/common';
import { Lesson_SportsmanService } from './lesson_sportsman.service';
import { Lesson_SportsmanController } from './lesson_sportsman.controller';
import { DbModule } from '../../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [Lesson_SportsmanController],
  providers: [Lesson_SportsmanService],
})
export class Lesson_SportsmanModule {}
