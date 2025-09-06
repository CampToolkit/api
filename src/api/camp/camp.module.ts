import { Module } from '@nestjs/common';
import { CampService } from './camp.service';
import { CampController } from './camp.controller';
import { DbModule } from '../../db/db-module/db.module';
import { Camp_SportsmanController } from './camp_sportsman/camp_sportsman.controller';
import { Camp_SportsmanService } from './camp_sportsman/camp_sportsman.service';
import { Camp_AuditoriumController } from './camp_auditorium/camp_auditorium.controller';
import { Camp_AuditoriumService } from './camp_auditorium/camp_auditorium.service';
import { Camp_CoachController } from './camp_coach/camp_coach.controller';
import { Camp_CoachService } from './camp_coach/camp_coach.service';
import { Camp_PracticeGroupService } from './camp_practice-group/camp_practice-group.service';
import { Camp_PracticeGroupController } from './camp_practice-group/camp_practice-group.controller';

@Module({
  imports: [DbModule],
  controllers: [
    CampController,
    Camp_SportsmanController,
    Camp_AuditoriumController,
    Camp_CoachController,
    Camp_PracticeGroupController,
  ],
  providers: [
    CampService,
    Camp_SportsmanService,
    Camp_AuditoriumService,
    Camp_CoachService,
    Camp_PracticeGroupService,
  ],
})
export class CampModule {}
