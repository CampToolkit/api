import { Injectable } from '@nestjs/common';
import { CreateCampDto } from './dto/create-camp.dto';
import { UpdateCampDto } from './dto/update-camp.dto';

@Injectable()
export class CampService {
  create(createCampDto: CreateCampDto) {
    return 'This action adds a new camp';
  }

  findAll() {
    return `This action returns all camp`;
  }

  findOne(id: number) {
    return `This action returns a #${id} camp`;
  }

  update(id: number, updateCampDto: UpdateCampDto) {
    return `This action updates a #${id} camp`;
  }

  remove(id: number) {
    return `This action removes a #${id} camp`;
  }
}
