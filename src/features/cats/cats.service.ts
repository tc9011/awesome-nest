import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CatEntity } from './cat.entity'
import { Repository } from 'typeorm'
import { Logger } from '../../shared/utils/logger'
import { CreateCatDto } from './cat.dto'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity) private readonly catRepository: Repository<CatEntity>,
  ) {
  }

  async getCat(id: string): Promise<CatEntity[]> {
    Logger.info('id', id)
    return await this.catRepository.find({ id })
  }

  async createCat(createCatDto: CreateCatDto) {
    await this.catRepository.save(createCatDto)
  }
}
