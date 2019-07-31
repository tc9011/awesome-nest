import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'

import config from '../config'

import { AccountController } from './apis/account/account.controller'
import { AccountService } from './apis/account/account.service'
import { AuthService } from './apis/auth/auth.service'
import { JwtStrategy } from './apis/auth/jwt.strategy'
import { CatsController } from './apis/cats/cats.controller'
import { CatsService } from './apis/cats/cats.service'
import { DogsController } from './apis/dogs/dogs.controller'
import { DogsService } from './apis/dogs/dogs.service'
import { CatEntity } from './entities/cat.entity'
import { DogEntity } from './entities/dog.entity'
import { UserEntity } from './entities/user.entity'

const ENTITIES = [CatEntity, DogEntity, UserEntity]

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([...ENTITIES]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(config.jwt),
  ],
  controllers: [CatsController, DogsController, AccountController],
  providers: [
    CatsService,
    DogsService,
    AuthService,
    JwtStrategy,
    AccountService,
  ],
  exports: [],
})
export class FeaturesModule {}
