import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PracticeGroupService } from './practice-group.service';
import { CreatePraciteGroupDto } from './dto/create-pracite-group.dto';
import { UpdatePraciteGroupDto } from './dto/update-pracite-group.dto';

@Controller('pracite-group')
export class PraciteGroupController {
  constructor(private readonly praciteGroupService: PracticeGroupService) {}

  @Post()
  create(@Body() createPraciteGroupDto: CreatePraciteGroupDto) {
    return this.praciteGroupService.create(createPraciteGroupDto);
  }

  @Get()
  findAll() {
    return this.praciteGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.praciteGroupService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePraciteGroupDto: UpdatePraciteGroupDto,
  ) {
    return this.praciteGroupService.update(+id, updatePraciteGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.praciteGroupService.remove(+id);
  }
}
