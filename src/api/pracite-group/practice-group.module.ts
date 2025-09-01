import { Module } from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { PracticeGroupController } from './practice-group.controller';
import { DbModule } from '../../db/db-module/db.module';

@Module({
  imports: [DbModule],
  controllers: [PracticeGroupController],
  providers: [PracticeGroupService],
})
export class PracticeGroupModule {}
