import { Module } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { SportsmanController } from './sportsman.controller';
import { DbModule } from '../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [SportsmanController],
  providers: [SportsmanService],
})
export class SportsmanModule {}
