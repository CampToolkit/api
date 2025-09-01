import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RbAuditorium } from './rb-auditorium.entity';
import { Repository } from 'typeorm';

interface AuditoriumParams {
  name: string;
}

@Injectable()
export class DbRbAuditoriumService {
  constructor(
    @InjectRepository(RbAuditorium)
    private rbAuditoriumRepository: Repository<RbAuditorium>,
  ) {}
  create(params: AuditoriumParams) {
    const auditorium = this.rbAuditoriumRepository.create(params);
    return this.rbAuditoriumRepository.save(auditorium);
  }

  async createMany(params: AuditoriumParams[]) {
    const existing = await this.rbAuditoriumRepository.find({
      where: params.map((item) => ({ name: item.name })),
    });
    if (existing && existing.length > 0) {
      const names = existing.map((item) => item.name);
      throw new Error(`Auditoriums ${names.join(', ')} already exists`);
    }
    const newAuditorium = this.rbAuditoriumRepository.create(params);
    return this.rbAuditoriumRepository.save(newAuditorium);
  }

  findAll() {
    return this.rbAuditoriumRepository.find();
  }

  findOne(id: number) {
    return this.rbAuditoriumRepository.findOne({ where: { id: id } });
  }

  async update(id: number, params: AuditoriumParams) {
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
