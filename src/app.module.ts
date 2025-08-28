import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { User } from './db/entities/person/user.entity';
import { Camp } from './db/entities/camp/camp.entity';
import { PracticeGroup } from './db/entities/practice-group.entity';

import { CampSportsman } from './db/entities/camp/camp_sportsman.entity';

import { RbActivityType } from './db/entities/schedule/rb-activity-type.entity';
import { RbAuditorium } from './db/entities/schedule/rb-auditorium.entity';
import { RbLessonType } from './db/entities/schedule/rb-lesson-type.entity';
import { Sportsman } from './db/entities/person/sportsman.entity';
import { CampModule } from './camp-api-modules/camp/camp.module';
import { PracticeGroupModule } from './camp-api-modules/pracite-group/practice-group.module';
import { SportsmanModule } from './camp-api-modules/sportsman/sportsman.module';

import { configuration } from './configuration';

import { LessonModule } from './camp-api-modules/lessons/lesson/lesson.module';
import { LessonCoachModule } from './camp-api-modules/lessons/lesson_coach/lesson_coach.module';
import { Lesson_GroupModule } from './camp-api-modules/lessons/lesson_group/lesson_group.module';
import { Lesson_SportsmanModule } from './camp-api-modules/lessons/lesson_sportsman-participants/lesson_sportsman-participants.module';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('db.host'),
        port: Number(config.get('db.port')),
        username: config.get('db.user'),
        password: config.get('db.password'),
        database: config.get('db.name'),
        migrations: ['./src/db/migrations/*.js'],
        migrationsTableName: 'typeorm_migrations',
        entities: [
          User,
          Camp,
          PracticeGroup,
          CampSportsman,

          RbActivityType,
          RbAuditorium,
          RbLessonType,
          Sportsman,
        ],
        synchronize: true,
        autoLoadEntities: true,
        connectorPackage: 'mysql2',
        migrationsRun: true,
        // logging: true,
        // logger: 'advanced-console',
      }),
    }),
    DbModule,
    CampModule,
    PracticeGroupModule,
    SportsmanModule,

    LessonModule,
    LessonCoachModule,
    Lesson_GroupModule,
    Lesson_SportsmanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
