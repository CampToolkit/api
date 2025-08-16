import { Module } from '@nestjs/common';
import { PraciteGroupService } from './pracite-group.service';
import { PraciteGroupController } from './pracite-group.controller';

@Module({
  controllers: [PraciteGroupController],
  providers: [PraciteGroupService],
})
export class PraciteGroupModule {}
