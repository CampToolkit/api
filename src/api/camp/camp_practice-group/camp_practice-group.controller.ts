import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { Camp_PracticeGroupService } from './camp_practice-group.service';

@Controller('camp/:campId/practice-group')
export class Camp_PracticeGroupController {
  constructor(private camp_practiceGroupService: Camp_PracticeGroupService) {}

  @Get()
  findAll(@Param('campId', ParseIntPipe) id: number) {
    return this.camp_practiceGroupService.findAll(id);
  }
}
