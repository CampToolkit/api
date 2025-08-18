import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Camp } from './entities/camp.entity';
import { CampSportsman } from './entities/camp_sportsman.entity';
import { PracticeGroup } from './entities/practice-group.entity';
import { RbActivityType } from './entities/rb-activity-type.entity';
import { RbAuditorium } from './entities/rb-auditorium.entity';
import { RbSlotType } from './entities/rb-slot-type.entity';
import { Sportsman } from './entities/sportsman.entity';
import { Session } from './entities/session.entity';
import { DbCampService } from './services/camp/db-camp.service';
import { DbPracticeGroupService } from './services/db-practice-group/db-practice-group.service';
import { DbSportsmanService } from './services/db-sportsman/db-sportsman.service';
import { DbSessionService } from './services/db-session/db-session.service';
import { DbActivityTypeService } from './services/activity-type/db-activity-type.service';
import { DbSlotTypeService } from './services/slot-type/db-slot-type.service';
import { DbAuditoriumService } from './services/auditorium/db-auditorium.service';
import { DbUserService } from './services/db-user/db-user.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Camp,
      PracticeGroup,
      CampSportsman,
      Session,
      RbActivityType,
      RbAuditorium,
      RbSlotType,
      Sportsman,
    ]),
  ],
  providers: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,
    DbSessionService,
    DbActivityTypeService,
    DbSlotTypeService,
    DbAuditoriumService,
    DbUserService,
  ],
  exports: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,
    DbSessionService,
  ],
})
export class DbModule {}
