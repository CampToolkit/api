import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './persons/user/user.entity';
import { Camp } from './camps/camp/camp.entity';

import { PracticeGroup } from './practice-group/practice-group.entity';
import { RbActivityType } from './schedule/rb-activity-type/rb-activity-type.entity';
import { RbAuditorium } from './rb-auditorium/rb-auditorium.entity';
import { RbLessonType } from './schedule/lesson-type/rb-lesson-type.entity';
import { Sportsman } from './persons/sportsman/sportsman.entity';

import { DbCampService } from './camps/camp/db-camp.service';
import { DbPracticeGroupService } from './practice-group/db-practice-group.service';
import { DbSportsmanService } from './persons/sportsman/db-sportsman.service';

import { DbLessonTypeService } from './schedule/lesson-type/db-lesson-type.service';

import { DbUserService } from './persons/user/db-user.service';
import { Lesson_Sportsman } from './schedule/lesson-sportsman-participants/lesson_sportsman.entity';
import { Lesson_Group } from './schedule/lesson-group-participants/lesson_group.entity';
import { Coach } from './persons/coach/coach.entity';
import { Lesson } from './schedule/lesson/lesson.entity';
import { Lesson_Coach } from './schedule/lesson_coach/lesson_coach.entity';
import { DbLessonService } from './schedule/lesson/db-lesson.service';
import { DbLesson_CoachService } from './schedule/lesson_coach/db-lesson_coach.service';
import { DbLesson_GroupService } from './schedule/lesson-group-participants/db-lesson_group.service';
import { DbLesson_SportsmanParticipantsService } from './schedule/lesson-sportsman-participants/db-lesson_sportsman-participants.service';
import { DbRbAuditoriumService } from './rb-auditorium/db-rb-auditorium.service';
import { DbRbActivityTypeService } from './schedule/rb-activity-type/db-rb-activity-type.service';
import { DbCoachService } from './persons/coach/db-coach.service';
import { DbCamp_SportsmanService } from './camps/camp_sportsman/db-camp_sportsman.service';
import { DbCamp_AuditoriumService } from './camps/camp_auditorium/db-camp_auditorium.service';
import { DbCamp_CoachService } from './camps/camp_coach/db-camp_coach.service';
import { DbPracticeGroup_SportsmanService } from './practice-group/db-practice-group_sportsman.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Camp,
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
    DbPracticeGroup_SportsmanService,
    DbSportsmanService,

    DbLessonTypeService,

    DbUserService,
    DbLessonService,
    DbLesson_CoachService,
    DbLesson_GroupService,
    DbLesson_SportsmanParticipantsService,
    DbRbAuditoriumService,
    DbRbActivityTypeService,
    DbCoachService,
    DbCamp_SportsmanService,

    DbCamp_AuditoriumService,

    DbCamp_CoachService,
  ],
  exports: [
    DbCampService,
    DbPracticeGroupService,
    DbPracticeGroup_SportsmanService,
    DbSportsmanService,

    DbLessonService,
    DbLesson_CoachService,
    DbLesson_GroupService,
    DbLesson_SportsmanParticipantsService,

    DbRbActivityTypeService,
    DbRbAuditoriumService,
    DbLessonTypeService,
    DbCoachService,

    DbCamp_SportsmanService,
    DbCamp_AuditoriumService,
    DbCamp_CoachService,
  ],
})
export class DbModule {}
