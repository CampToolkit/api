// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { User } from './src/db/entities/person/user.entity';
import { Camp } from './src/db/entities/camp/camp.entity';
import { PracticeGroup } from './src/db/entities/practice-group.entity';
import { CampSportsman } from './src/db/entities/camp/camp_sportsman.entity';

import { RbActivityType } from './src/db/entities/schedule/rb-activity-type.entity';
import { RbAuditorium } from './src/db/entities/schedule/rb-auditorium.entity';
import { RbLessonType } from './src/db/entities/schedule/rb-lesson-type.entity';
import { Sportsman } from './src/db/entities/person/sportsman.entity';
import { PracticeSession } from './src/db/entities/practice-session.entity';
import { Coach } from './src/db/entities/person/coach.entity';
import { LessonGroupParticipants } from './src/db/entities/schedule/lesson-group-participants.entity';
import { LessonSportsmanParticipants } from './src/db/entities/schedule/lesson-sportsman-participants.entity';
import { Lesson_Coach } from './src/db/entities/schedule/lesson_coach.entity';
import { Lesson } from './src/db/entities/schedule/lesson.entity';

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [
    Camp,
    CampSportsman,
    PracticeGroup,

    User,
    Sportsman,
    Coach,

    Lesson,
    LessonGroupParticipants,
    LessonSportsmanParticipants,
    Lesson_Coach,

    RbLessonType,
    RbActivityType,
    RbAuditorium,

    PracticeSession,
  ],
  migrations: [join(__dirname, 'src/migrations/*{.ts,.js}')],
  synchronize: false, // для prod через миграции
});
