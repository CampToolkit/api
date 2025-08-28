import { Injectable } from '@nestjs/common';
import { Coach } from '../../entities/person/coach.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DbCoachService {
  constructor(
    @InjectRepository(Coach)
    private coachRepository: Repository<Coach>,
  ) {}

  async create(params: {
    lastName: string;
    firstName: string;
    patrName: string;
  }) {
    const existingCoach = await this.coachRepository.findOne({
      where: {
        lastName: params.lastName,
        firstName: params.firstName,
        patrName: params.patrName,
      },
    });
    if (existingCoach) {
      return existingCoach;
    }
    const coach = this.coachRepository.create(params);
    return this.coachRepository.save(coach);
  }

  findAll() {
    return this.coachRepository.find();
  }

  findOne(id: number) {
    return this.coachRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    params: {
      lastName?: string;
      firstName?: string;
      patrName?: string;
    },
  ) {
    const coach = await this.coachRepository.findOne({ where: { id } });
    if (!coach) {
      throw new Error(`Coach with id ${id} not found`);
    }
    if (params.lastName) {
      coach.lastName = params.lastName;
    }
    if (params.firstName) {
      coach.firstName = params.firstName;
    }
    if (params.lastName) {
      coach.lastName = params.lastName;
    }
    return this.coachRepository.update(id, coach);
  }

  remove(id: number) {
    // todo добавить проверку?
    return this.coachRepository.softDelete(id);
  }
}
