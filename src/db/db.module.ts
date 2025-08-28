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

import { DbCampService } from './services/camp/db-camp.service';
import { DbPracticeGroupService } from './services/practice-group/db-practice-group.service';
import { DbSportsmanService } from './services/db-sportsman/db-sportsman.service';

import { DbActivityTypeService } from './services/activity-type/db-activity-type.service';
import { DbLessonTypeService } from './services/lesson-type/db-lesson-type.service';
import { DbAuditoriumService } from './services/auditorium/db-auditorium.service';
import { DbUserService } from './services/user/db-user.service';
import { Lesson_Sportsman } from './entities/schedule/lesson_sportsman.entity';
import { Lesson_Group } from './entities/schedule/lesson_group.entity';
import { Coach } from './entities/person/coach.entity';
import { Lesson } from './entities/schedule/lesson.entity';
import { Lesson_Coach } from './entities/schedule/lesson_coach.entity';
import { DbLessonService } from './services/lesson/db-lesson.service';
import { DbLesson_CoachService } from './services/lesson_coach/db-lesson_coach.service';
import { DbLesson_GroupService } from './services/lesson-group-participants/db-lesson_group.service';
import { DbLesson_SportsmanParticipantsService } from './services/lesson-sportsman-participants/db-lesson_sportsman-participants.service';
import { DbRbAuditoriumService } from './services/rb-auditorium/db-rb-auditorium.service';

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
      Lesson_Sportsman,
      Lesson_Group,
      Lesson_Coach,
      RbActivityType,
      RbAuditorium,
      RbLessonType,
    ]),
  ],
  providers: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,

    DbActivityTypeService,
    DbLessonTypeService,
    DbAuditoriumService,
    DbUserService,
    DbLessonService,
    DbLesson_CoachService,
    DbLesson_GroupService,
    DbLesson_SportsmanParticipantsService,
    DbRbAuditoriumService,
  ],
  exports: [
    DbCampService,
    DbPracticeGroupService,
    DbSportsmanService,

    DbLessonService,
    DbLesson_CoachService,
    DbLesson_GroupService,
    DbLesson_SportsmanParticipantsService,
  ],
})
export class DbModule {}
