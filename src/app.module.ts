import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { User } from './db/entities/user.entity';
import { Camp } from './db/entities/camp.entity';
import { PracticeGroup } from './db/entities/practice-group.entity';
import { CampPracticeGroup } from './db/entities/camp_practice-group.entity';
import { CampSportsman } from './db/entities/camp_sportsman.entity';
import { Session } from './db/entities/session.entity';
import { RbActivityType } from './db/entities/rb-activity-type.entity';
import { RbAuditorium } from './db/entities/rb-auditorium.entity';
import { RbSlotType } from './db/entities/rb-slot-type.entity';
import { Sportsman } from './db/entities/sportsman.entity';
import { CampModule } from './modules/camp/camp.module';
import * as process from 'node:process';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`, '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'mysql',
        host: config.get('DB_HOST'),
        port: Number(config.get('DB_PORT')),
        username: config.get('DB_USER'),
        password: config.get('DB_PASS'),
        database: config.get('DB_NAME'),
        migrations: ['./src/db/migrations/*.js'],
        migrationsTableName: 'typeorm_migrations',
        entities: [
          User,
          Camp,
          PracticeGroup,
          CampPracticeGroup,
          CampSportsman,
          Session,
          RbActivityType,
          RbAuditorium,
          RbSlotType,
          Sportsman,
        ],
        synchronize: true,
        autoLoadEntities: true,
        connectorPackage: 'mysql2',
        migrationsRun: true,
        logging: true,
        logger: 'advanced-console',
      }),
    }),
    DbModule,
    CampModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
