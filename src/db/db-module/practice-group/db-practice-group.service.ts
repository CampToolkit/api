import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeGroup } from './practice-group.entity';
import { Repository, IsNull } from 'typeorm';

interface CreateGroupParams {
  name: string;
  parentId?: number;
  campId: number;
}

@Injectable()
export class DbPracticeGroupService {
  constructor(
    @InjectRepository(PracticeGroup)
    private readonly practiceGroupRepository: Repository<PracticeGroup>,
  ) {}

  logger = new Logger('DbPracticeGroupService');

  create(params: CreateGroupParams) {
    const group = this.practiceGroupRepository.create(params);

    return this.practiceGroupRepository.save(group);
  }

  async createMany(params: CreateGroupParams[]) {
    const existing = await this.practiceGroupRepository.find({
      where: params.map((pg) => ({
        name: pg.name,
        campId: pg.campId,
      })),
    });

    if (existing.length > 0) {
      const names = existing.map((p) => p.name);
      throw new Error(
        `Group ${names.join(', ')} already exists in Camp id ${existing[0].camp.id}`,
      );
    }

    const newGroups = this.practiceGroupRepository.create(params);
    return this.practiceGroupRepository.save(newGroups);
  }

  findAll() {
    return this.practiceGroupRepository.find();
  }

  findAllByCamp(campId: number) {
    return this.practiceGroupRepository.find({
      where: { camp: { id: campId }, parent: IsNull() },
      relations: ['parent', 'children'],
    });
  }

  findOne(id: number) {
    return this.practiceGroupRepository.findOne({
      where: { id: id },
      relations: ['parent', 'children'],
    });
  }

  async update(
    id: number,
    params: Partial<{ name: string; parentId?: number }>,
  ) {
    const group = await this.practiceGroupRepository.findOne({
      where: { id: id },
    });
    if (!group) {
      throw new Error(`PracticeGroup with id ${id} not found`);
    }

    if (params.parentId) {
      const parent = await this.practiceGroupRepository.findOne({
        where: { id: params.parentId },
      });
      if (!parent) {
        throw new Error(`ParentGroup with id ${id} not found`);
      }
    }

    Object.assign(group, params);

    return this.practiceGroupRepository.save(group);
  }

  async remove(id: number) {
    const group = await this.practiceGroupRepository.findOne({
      where: { id: id },
    });
    if (!group) {
      throw new Error(`PracticeGroup with id ${id} not found`);
    }
    return this.practiceGroupRepository.softDelete(id);
  }
}
