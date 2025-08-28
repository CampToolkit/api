import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbAuditorium } from '../../entities/schedule/rb-auditorium.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DbRbAuditoriumService {
  constructor(
    @InjectRepository(RbAuditorium)
    private rbAuditoriumRepository: Repository<RbAuditorium>,
  ) {}
  create(params: { name: string }) {
    const auditorium = this.rbAuditoriumRepository.create(params);
    return this.rbAuditoriumRepository.save(auditorium);
  }

  findAll() {
    return this.rbAuditoriumRepository.find();
  }

  findOne(id: number) {
    return this.rbAuditoriumRepository.findOne({ where: { id: id } });
  }

  async update(id: number, params: { name: string }) {
    const auditorium = await this.rbAuditoriumRepository.findOne({
      where: { id: id },
    });
    if (!auditorium) {
      throw new Error(`Auditorium with id ${id} not found`);
    }
    auditorium.name = params.name;
    return this.rbAuditoriumRepository.update(id, auditorium);
  }

  remove(id: number) {
    return this.rbAuditoriumRepository.softDelete(id);
  }
}
