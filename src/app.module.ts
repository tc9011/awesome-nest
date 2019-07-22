import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsController } from './features/cats/cats.controller'
import { CatsService } from './features/cats/cats.service'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { CatEntity } from './features/cats/cat.entity'
import { DogsController } from './features/dogs/dogs.controller';
import { DogsService } from './features/dogs/dogs.service';
import config from './config'

const ENTITIES = [
  CatEntity,
]

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([...ENTITIES]),
  ],
  controllers: [AppController, CatsController, DogsController],
  providers: [AppService, CatsService, DogsService],
})
export class AppModule {}
