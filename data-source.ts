// data-source.ts
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';
import { User } from './src/db/entities/user.entity';
import { Camp } from './src/db/entities/camp.entity';
import { PracticeGroup } from './src/db/entities/practice-group.entity';
import { CampPracticeGroup } from './src/db/entities/camp_practice-group.entity';
import { CampSportsman } from './src/db/entities/camp_sportsman.entity';

import { RbActivityType } from './src/db/entities/rb-activity-type.entity';
import { RbAuditorium } from './src/db/entities/rb-auditorium.entity';
import { RbSlotType } from './src/db/entities/rb-slot-type.entity';
import { Sportsman } from './src/db/entities/sportsman.entity';
import { Session } from './src/db/entities/session.entity';

config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
  migrations: [join(__dirname, 'src/migrations/*{.ts,.js}')],
  synchronize: false, // для prod через миграции
});
