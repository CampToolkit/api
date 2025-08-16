import { Injectable } from '@nestjs/common';
import { CreateSportsmanDto } from './dto/create-sportsman.dto';
import { UpdateSportsmanDto } from './dto/update-sportsman.dto';

@Injectable()
export class SportsmanService {
  create(createSportsmanDto: CreateSportsmanDto) {
    return 'This action adds a new sportsman';
  }

  findAll() {
    return `This action returns all sportsman`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sportsman`;
  }

  update(id: number, updateSportsmanDto: UpdateSportsmanDto) {
    return `This action updates a #${id} sportsman`;
  }

  remove(id: number) {
    return `This action removes a #${id} sportsman`;
  }
}
