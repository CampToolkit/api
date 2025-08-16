import { Module } from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { PraciteGroupController } from './pracite-group.controller';

@Module({
  controllers: [PraciteGroupController],
  providers: [PracticeGroupService],
})
export class PraciteGroupModule {}
