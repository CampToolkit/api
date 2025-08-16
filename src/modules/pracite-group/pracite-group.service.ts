import { Injectable } from '@nestjs/common';
import { CreatePraciteGroupDto } from './dto/create-pracite-group.dto';
import { UpdatePraciteGroupDto } from './dto/update-pracite-group.dto';

@Injectable()
export class PraciteGroupService {
  create(createPraciteGroupDto: CreatePraciteGroupDto) {
    return 'This action adds a new praciteGroup';
  }

  findAll() {
    return `This action returns all praciteGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} praciteGroup`;
  }

  update(id: number, updatePraciteGroupDto: UpdatePraciteGroupDto) {
    return `This action updates a #${id} praciteGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} praciteGroup`;
  }
}
