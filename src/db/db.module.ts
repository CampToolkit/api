import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/person/user.entity';
import { Camp } from './entities/camp/camp.entity';
import { CampSportsman } from './entities/camp/camp_sportsman.entity';
import { PracticeGroup } from './entities/practice-group.entity';
import { RbActivityType } from './entities/schedule/rb-activity-type.entity';
import { RbAuditorium } from './entities/schedule/rb-auditorium.entity';
import { RbLessonType } from './entities/schedule/rb-lesson-type.entity';
import { Sportsman } from './entities/person/sportsman.entity';
import { PracticeSession } from './entities/practice-session.entity';
import { DbCampService } from './services/camp/db-camp.service';
import { DbPracticeGroupService } from './services/practice-group/db-practice-group.service';
import { DbSportsmanService } from './services/db-sportsman/db-sportsman.service';
import { DbSessionService } from './services/session/db-session.service';
import { DbActivityTypeService } from './services/activity-type/db-activity-type.service';
import { DbLessonTypeService } from './services/slot-type/db-lesson-type.service';
import { DbAuditoriumService } from './services/auditorium/db-auditorium.service';
import { DbUserService } from './services/user/db-user.service';
import { LessonSportsmanParticipants } from './entities/schedule/lesson-sportsman-participants.entity';
import { LessonGroupParticipants } from './entities/schedule/lesson-group-participants.entity';
import { Coach } from './entities/person/coach.entity';
import { Lesson } from './entities/schedule/lesson.entity';
import { Lesson_Coach } from './entities/schedule/lesson_coach.entity';
import { DbLessonService } from './services/lesson/db-lesson.service';
import { DbLessonCoachService } from './services/lesson_coach/db-lesson_coach.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Camp,
      CampSportsman,
      PracticeGroup,

      User,
      Coach,
      Sportsman,

      Lesson,
      LessonSportsmanParticipants,
      LessonGroupParticipants,
      Lesson_Coach,
      RbActivityType,
      RbAuditorium,
      RbLessonType,

      PracticeSession,
    ]),
  ],
  providers: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,
    DbSessionService,
    DbActivityTypeService,
    DbLessonTypeService,
    DbAuditoriumService,
    DbUserService,
    DbLessonService,
    DbLessonCoachService,
  ],
  exports: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,
    DbSessionService,
  ],
})
export class DbModule {}
