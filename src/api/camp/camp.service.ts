import { Injectable } from '@nestjs/common';

import { Camp } from '../../db/db-module/camps/camp/camp.entity';
import { DbCampService } from '../../db/db-module/camps/camp/db-camp.service';
import { UpdateResult } from 'typeorm';

@Injectable()
export class CampService {
  constructor(private readonly dbCampService: DbCampService) {}

  create(params: {
    startDate: string;
    endDate: string;
    name: string;
    city: string;
  }): Promise<Camp> {
    return this.dbCampService.create(params);
  }

  findAll(): Promise<Camp[]> {
    return this.dbCampService.findAll();
  }

  findOne(id: number): Promise<Camp | null> {
    return this.dbCampService.findOne(id);
  }

  update(
    id: number,
    params: Partial<{
      startDate: string;
      endDate: string;
      name: string;
      city: string;
    }>,
  ): Promise<Camp> {
    return this.dbCampService.update(id, params);
  }

  remove(id: number): Promise<UpdateResult> {
    return this.dbCampService.remove(id);
  }
}
