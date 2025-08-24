import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PracticeSession } from '../../entities/practice-session.entity';
import { Repository } from 'typeorm';
import { DbActivityTypeService } from '../activity-type/db-activity-type.service';
import { DbLessonTypeService } from '../slot-type/db-lesson-type.service';
import { DbAuditoriumService } from '../auditorium/db-auditorium.service';
import { DbCampService } from '../camp/db-camp.service';
import { DbPracticeGroupService } from '../db-practice-group/db-practice-group.service';

@Injectable()
export class DbSessionService {
  constructor(
    @InjectRepository(PracticeSession)
    private readonly sessionRepository: Repository<PracticeSession>,

    @Inject(DbCampService)
    private readonly dbCampService: DbCampService,
    @Inject(DbPracticeGroupService)
    private readonly dbPracticeGroup: DbPracticeGroupService,
    @Inject(DbActivityTypeService)
    private readonly dbActivityTypeService: DbActivityTypeService,
    @Inject(DbLessonTypeService)
    private readonly dbSlotTypeService: DbLessonTypeService,
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
        this.dbPracticeGroup.findOne(params.practiceGroupId),
        this.dbActivityTypeService.findOne(params.activityTypeId),
        this.dbSlotTypeService.findOne(params.slotTypeId),
        this.dbAuditoriumService.findOne(params.auditoriumId),
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
      startDate: params.startDate,
      endDate: params.endDate,
      camp: camp,
      practiceGroup: practiceGroup,
      activityType: activityType,
      slotType: slotType,
      auditorium: auditorium,
    });

    return this.sessionRepository.save(session);
  }

  findAll(campId: number) {
    return this.sessionRepository.find({ where: { camp: { id: campId } } });
  }

  findOne(id: number) {
    return this.sessionRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    params: {
      startDate?: string;
      endDate?: string;
      practiceGroupId?: number;
      activityTypeId?: number;
      slotTypeId?: number;
      auditoriumId?: number;
    },
  ) {
    const session = await this.sessionRepository.findOne({
      where: { id },
      relations: ['practiceGroup', 'activityType', 'slotType', 'auditorium'],
    });

    if (!session) {
      throw new Error(`Session with id=${id} not found`);
    }

    if (params.startDate) {
      session.startDate = new Date(params.startDate);
    }
    if (params.endDate) {
      session.endDate = new Date(params.endDate);
    }

    if (params.practiceGroupId) {
      const practiceGroup = await this.dbPracticeGroup.findOne(
        params.practiceGroupId,
      );
      if (!practiceGroup) {
        throw new Error(
          `PracticeGroup with id=${params.practiceGroupId} not found`,
        );
      }
      session.practiceGroup = practiceGroup;
    }

    if (params.activityTypeId) {
      const activityType = await this.dbActivityTypeService.findOne(
        params.activityTypeId,
      );
      if (!activityType) {
        throw new Error(
          `ActivityType with id=${params.activityTypeId} not found`,
        );
      }
      session.activityType = activityType;
    }

    if (params.slotTypeId) {
      const slotType = await this.dbSlotTypeService.findOne(params.slotTypeId);
      if (!slotType) {
        throw new Error(`SlotType with id=${params.slotTypeId} not found`);
      }
      session.slotType = slotType;
    }

    if (params.auditoriumId) {
      const auditorium = await this.dbAuditoriumService.findOne(
        params.auditoriumId,
      );
      if (!auditorium) {
        throw new Error(`Auditorium with id=${params.auditoriumId} not found`);
      }
      session.auditorium = auditorium;
    }

    return this.sessionRepository.save(session);
  }

  async remove(id: number) {
    const session = await this.sessionRepository.findOneBy({ id });
    if (!session) {
      throw new Error(`session with id ${id} not found`);
    }
    return this.sessionRepository.softDelete(id);
  }
}
