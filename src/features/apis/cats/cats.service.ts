import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { EntityManager, Repository } from 'typeorm'

import { LunarCalendarService } from '../../../shared/services/lunar-calendar/lunar-calendar.service'
import { Logger } from '../../../shared/utils/logger'
import { CreateCatDto } from '../../dtos/cat.dto'
import { CatEntity } from '../../entities/cat.entity'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
    private readonly lunarCalendarService: LunarCalendarService,
  ) {}

  async getCat(id: string): Promise<Partial<CatEntity>[]> {
    Logger.info('id', id)
    const lunarCalendar = await this.lunarCalendarService
      .getLunarCalendar()
      .toPromise()
    Logger.log(lunarCalendar)
    return await this.catRepository.find({ id })
  }

  async getCats(): Promise<any> {
    const cats = await this.catRepository.find()
    return {
      cats,
      title: 'Cats List',
    }
  }

  async createCat(createCatDto: CreateCatDto): Promise<void> {
    await this.catRepository.save(createCatDto)
  }

  async deleteCat(name: string, manager: EntityManager): Promise<void> {
    await manager.delete(CatEntity, { name })
  }
}
