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
  providers: [DbCampService, DbPracticeGroupService, DbSportsmanService],
  exports: [DbCampService, DbPracticeGroupService, DbSportsmanService],
})
export class DbModule {}
