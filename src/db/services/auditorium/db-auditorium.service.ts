import { Injectable } from '@nestjs/common';
import { RbAuditorium } from '../../entities/rb-auditorium.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DbAuditoriumService {
  constructor(
    @InjectRepository(RbAuditorium)
    private readonly rbAuditoriumRepository: Repository<RbAuditorium>,
  ) {}

  findOne(id: number) {
    return this.rbAuditoriumRepository.findOne({ where: { id } });
  }
}
