import { Module } from '@nestjs/common';
import { CampService } from './camp.service';
import { CampController } from './camp.controller';

@Module({
  controllers: [CampController],
  providers: [CampService],
})
export class CampModule {}
