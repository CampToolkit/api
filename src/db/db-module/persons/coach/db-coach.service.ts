import { Injectable } from '@nestjs/common';
import { Coach } from './coach.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

interface CoachParams {
  lastName: string;
  firstName: string;
  patrName: string;
}

@Injectable()
export class DbCoachService {
  constructor(
    @InjectRepository(Coach)
    private coachRepository: Repository<Coach>,
  ) {}

  async create(params: CoachParams) {
    const existing = await this.coachRepository.findOne({
      where: {
        lastName: params.lastName,
        firstName: params.firstName,
        patrName: params.patrName,
      },
    });
    if (existing) {
      return existing;
    }
    const coach = this.coachRepository.create(params);
    return this.coachRepository.save(coach);
  }

  async createMany(params: CoachParams[]) {
    const existing = await this.coachRepository.find({
      where: params.map((p) => ({
        lastName: p.lastName,
        firstName: p.firstName,
        patrName: p.patrName,
      })),
    });

    if (existing.length > 0) {
      const names = existing.map(
        (c) => `${c.lastName} ${c.firstName} ${c.patrName}`,
      );
      throw new Error(`Coaches ${names.join(', ')} already exist`);
    }

    const newCoaches = this.coachRepository.create(params);
    return this.coachRepository.save(newCoaches);
  }

  findAll() {
    return this.coachRepository.find();
  }

  findOne(id: number) {
    return this.coachRepository.findOne({ where: { id } });
  }

  async update(id: number, params: Partial<CoachParams>) {
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
