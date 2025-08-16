import { Module } from '@nestjs/common';
import { SportsmanService } from './sportsman.service';
import { SportsmanController } from './sportsman.controller';

@Module({
  controllers: [SportsmanController],
  providers: [SportsmanService],
})
export class SportsmanModule {}
