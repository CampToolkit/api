import { Module } from '@nestjs/common';

import { DbModule } from '../../db/db.module';
import { SportsmanService } from './sportsman.service';
import { SportsmanController } from './sportsman.controller';

@Module({
  imports: [DbModule],
  controllers: [SportsmanController],
  providers: [SportsmanService],
})
export class SportsmanModule {}
