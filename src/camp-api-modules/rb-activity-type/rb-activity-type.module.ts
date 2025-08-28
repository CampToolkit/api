import { Module } from '@nestjs/common';
import { RbActivityTypeService } from './rb-activity-type.service';
import { RbActivityTypeController } from './rb-activity-type.controller';
import { DbModule } from '../../db/db.module';

@Module({
  imports: [DbModule],
  controllers: [RbActivityTypeController],
  providers: [RbActivityTypeService],
})
export class RbActivityTypeModule {}
