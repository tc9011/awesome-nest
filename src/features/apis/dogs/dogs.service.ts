import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm'

import { DogEntity } from '../../entities/dog.entity'

@Injectable()
export class DogsService extends TypeOrmCrudService<DogEntity> {
  constructor(@InjectRepository(DogEntity) repo) {
    super(repo)
  }
}
