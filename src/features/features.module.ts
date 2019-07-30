import {
  Module,
} from '@nestjs/common'
import { CatsController } from './cats/cats.controller'
import { DogsController } from './dogs/dogs.controller'
import { CatsService } from './cats/cats.service'
import { DogsService } from './dogs/dogs.service'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import config from '../config'
import { CatEntity } from './entities/cat.entity'
import { DogEntity } from './entities/dog.entity'

const ENTITIES = [
  CatEntity,
  DogEntity,
]

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([...ENTITIES]),
  ],
  controllers: [
    CatsController,
    DogsController,
  ],
  providers: [
    CatsService,
    DogsService,
  ],
})
export class FeaturesModule {
}
