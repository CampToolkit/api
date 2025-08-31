import { Module } from '@nestjs/common';
import { CampService } from './camp.service';
import { CampController } from './camp.controller';
import { DbModule } from '../../db/db.module';
import { Camp_SportsmanController } from './camp_sportsman/camp_sportsman.controller';
import { Camp_SportsmanService } from './camp_sportsman/camp_sportsman.service';
import { Camp_AuditoriumController } from './camp_auditorium/camp_auditorium.controller';
import { Camp_AuditoriumService } from './camp_auditorium/camp_auditorium.service';

@Module({
  imports: [DbModule],
  controllers: [
    CampController,
    Camp_SportsmanController,
    Camp_AuditoriumController,
  ],
  providers: [CampService, Camp_SportsmanService, Camp_AuditoriumService],
})
export class CampModule {}
