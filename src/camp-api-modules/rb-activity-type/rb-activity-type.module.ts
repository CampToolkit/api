import { Module } from '@nestjs/common';
import { RbActivityTypeService } from './rb-activity-type.service';
import { RbActivityTypeController } from './rb-activity-type.controller';

@Module({
  controllers: [RbActivityTypeController],
  providers: [RbActivityTypeService],
})
export class RbActivityTypeModule {}
