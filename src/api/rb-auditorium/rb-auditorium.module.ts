import { Module } from '@nestjs/common';
import { RbAuditoriumService } from './rb-auditorium.service';
import { RbAuditoriumController } from './rb-auditorium.controller';
import { DbModule } from '../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [RbAuditoriumController],
  providers: [RbAuditoriumService],
})
export class RbAuditoriumModule {}
