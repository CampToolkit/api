import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeGroup } from '../../entities/practice-group.entity';
import { Repository } from 'typeorm';
import { CampPracticeGroup } from '../../entities/camp_practice-group.entity';

@Injectable()
export class DbPracticeGroupService {
  constructor(
    @InjectRepository(PracticeGroup)
    private readonly practiceGroupRepository: Repository<PracticeGroup>,
    @InjectRepository(CampPracticeGroup)
    private readonly campPracticeGroupRepository: Repository<CampPracticeGroup>,
  ) {}

  findAll() {
    return this.practiceGroupRepository.find();
  }

  findAllByCamp(campId: number) {
    return this.practiceGroupRepository
      .createQueryBuilder('pg')
      .innerJoin('camp_practiceGroup', 'cpg', 'cpg.practiceGroupId = pg.id')
      .where('cpg.campId = :campId', { campId })
      .getMany();
  }

  create(params: { name: string; parentId?: number }) {
    const group = this.practiceGroupRepository.create(params);
    return this.practiceGroupRepository.save(group);
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
    Object.assign(group, params);

    return this.practiceGroupRepository.save(group);
  }

  remove(id: number) {
    return this.practiceGroupRepository.softDelete(id);
  }
}
