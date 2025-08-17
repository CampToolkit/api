import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from '../../entities/session.entity';
import { Repository } from 'typeorm';
import { DbActivityTypeService } from '../activity-type/db-activity-type.service';
import { DbSlotTypeService } from '../slot-type/db-slot-type.service';
import { DbAuditoriumService } from '../auditorium/db-auditorium.service';
import { DbCampService } from '../camp/db-camp.service';
import { DbPracticeGroupService } from '../db-practice-group/db-practice-group.service';

@Injectable()
export class DbSessionService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,

    @Inject(DbCampService)
    private readonly dbCampService: DbCampService,
    @Inject(DbPracticeGroupService)
    private readonly dbPracticeGroup: DbPracticeGroupService,
    @Inject(DbActivityTypeService)
    private readonly dbActivityTypeService: DbActivityTypeService,
    @Inject(DbSlotTypeService)
    private readonly dbSlotTypeService: DbSlotTypeService,
    @Inject(DbAuditoriumService)
    private readonly dbAuditoriumService: DbAuditoriumService,
  ) {}

  async create(params: {
    startDate: string;
    endDate: string;
    campId: number;
    practiceGroupId: number;
    activityTypeId: number;
    slotTypeId: number;
    auditoriumId: number;
  }) {
    const [camp, practiceGroup, activityType, slotType, auditorium] =
      await Promise.all([
        this.dbCampService.findOne(params.campId),
        this.dbPracticeGroup.findOne(params.campId),
        this.dbActivityTypeService.findOne(params.campId),
        this.dbSlotTypeService.findOne(params.campId),
        this.dbAuditoriumService.findOne(params.campId),
      ]);

    if (!camp) {
      throw new Error(`Camp with id ${params.campId} not found`);
    }
    if (!practiceGroup) {
      throw new Error(
        `PracticeGroup with id ${params.practiceGroupId} not found`,
      );
    }
    if (!activityType) {
      throw new Error(
        `activityType with id ${params.activityTypeId} not found`,
      );
    }

    if (!slotType) {
      throw new Error(`slotType with id ${params.slotTypeId} not found`);
    }

    if (!auditorium) {
      throw new Error(`auditorium with id ${params.auditoriumId} not found`);
    }

    const session = this.sessionRepository.create({
      camp: camp,
      practiceGroup: practiceGroup,
      activityType: activityType,
      slotType: slotType,
      auditorium: auditorium,
    });

    return this.sessionRepository.save(session);
  }

  findAll() {
    return `This action returns all session`;
  }

  findOne(id: number) {
    return `This action returns a #${id} session`;
  }

  update(id: number) {
    return `This action updates a #${id} session`;
  }

  remove(id: number) {
    return `This action removes a #${id} session`;
  }
}
