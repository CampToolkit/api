import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { CampModule } from './api/camp/camp.module';
import { PracticeGroupModule } from './api/pracite-group/practice-group.module';
import { SportsmanModule } from './api/sportsman/sportsman.module';

import { configuration } from './configuration';

import { LessonModule } from './api/lessons/lesson/lesson.module';
import { LessonCoachModule } from './api/lessons/lesson_coach/lesson_coach.module';
import { Lesson_GroupModule } from './api/lessons/lesson_group/lesson_group.module';
import { Lesson_SportsmanModule } from './api/lessons/lesson_sportsman/lesson_sportsman-participants.module';
import { RbActivityTypeModule } from './api/rb-activity-type/rb-activity-type.module';
import { RbAuditoriumModule } from './api/rb-auditorium/rb-auditorium.module';
import { LessonTypeModule } from './api/lesson-type/lesson-type.module';
import { CoachModule } from './api/coach/coach.module';

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
        autoLoadEntities: true,
        migrations: [__dirname + '/db/migrations/*{.ts,.js}'],
        migrationsTableName: 'typeorm_migrations',
        synchronize: true,
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
    RbActivityTypeModule,
    RbAuditoriumModule,
    LessonTypeModule,
    CoachModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
