import { Module } from '@nestjs/common';
import { CampService } from './camp.service';
import { CampController } from './camp.controller';
import { DbModule } from '../../db/db.module';
import { Camp_SportsmanService } from './camp_sportsman/camp_sportsman.service';
import { Camp_SportsmanController } from './camp_sportsman/camp_sportsman.controller';

@Module({
  imports: [DbModule],
  controllers: [CampController, Camp_SportsmanController],
  providers: [CampService, Camp_SportsmanService],
})
export class CampModule {}
