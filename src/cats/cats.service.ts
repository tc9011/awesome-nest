import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CatEntity } from './cat.entity'
import { Repository } from 'typeorm'

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity) private readonly catRepository: Repository<CatEntity>,
  ) {
  }

  async getCat(id: number): Promise<CatEntity[]> {
    return await this.catRepository.find({ id })
  }
}
