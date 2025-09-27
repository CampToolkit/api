import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  Query,
  Logger,
} from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { CreatePracticeGroupDto } from './dto/create-practice-group.dto';
import { UpdatePracticeGroupDto } from './dto/update-practice-group.dto';
import { CreatePracticeGroupBulkDto } from './dto/CreatePracticeGroupBulk.dto';
import { FindAllDto } from './dto/FindAll.dto';
import { AddSportsmenToGroupDTO } from './dto/add-sportsmen-to-group.dto';

@Controller('practice-group')
export class PracticeGroupController {
  constructor(private readonly practiceGroupService: PracticeGroupService) {}

  logger = new Logger('DbPracticeGroupController');
  @Post()
  create(@Body() createPracticeGroupDto: CreatePracticeGroupDto) {
    return this.practiceGroupService.create(createPracticeGroupDto);
  }

  @Post('bulk')
  createMany(@Body() dto: CreatePracticeGroupBulkDto) {
    return this.practiceGroupService.createMany(dto.items);
  }

  @Get()
  findAll(@Query('campId') dto: FindAllDto) {
    return this.practiceGroupService.findAll(dto);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePracticeGroupDto: UpdatePracticeGroupDto,
  ) {
    return this.practiceGroupService.update(id, updatePracticeGroupDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.practiceGroupService.remove(id);
  }

  // note sportsmen block

  @Get(':id/sportsman')
  async getSportsmen(@Param('id', ParseIntPipe) id: number) {
    const result = await this.practiceGroupService.getSportsmen(id);
    return result.sportsmen;
  }

  @Post(':id/sportsman')
  addSportsmen(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: AddSportsmenToGroupDTO,
  ) {
    return this.practiceGroupService.addSportsmen({
      campId: dto.campId,
      groupId: id,
      sportsmanIds: dto.items,
    });
  }
}
