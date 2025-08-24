import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeGroup } from '../../entities/practice-group.entity';
import { Repository, IsNull } from 'typeorm';

@Injectable()
export class DbPracticeGroupService {
  constructor(
    @InjectRepository(PracticeGroup)
    private readonly practiceGroupRepository: Repository<PracticeGroup>,
  ) {}

  logger = new Logger('DbPracticeGroupService');

  create(params: { name: string; parentId?: number; campId: number }) {
    const group = this.practiceGroupRepository.create(params);
    this.logger.log(group);
    return this.practiceGroupRepository.save(group);
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
