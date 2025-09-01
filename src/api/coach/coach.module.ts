import { Module } from '@nestjs/common';
import { CoachService } from './coach.service';
import { CoachController } from './coach.controller';
import { DbModule } from '../../db/db-module/db.module';

@Module({
  imports: [DbModule],
  controllers: [CoachController],
  providers: [CoachService],
})
export class CoachModule {}
