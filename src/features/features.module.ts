import { Module } from '@nestjs/common'
import { CatsController } from './apis/cats/cats.controller'
import { DogsController } from './apis/dogs/dogs.controller'
import { CatsService } from './apis/cats/cats.service'
import { DogsService } from './apis/dogs/dogs.service'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { CatEntity } from './entities/cat.entity'
import { DogEntity } from './entities/dog.entity'
import { UserEntity } from './entities/user.entity'
import { AuthService } from './apis/auth/auth.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './apis/auth/jwt.strategy'
import { AccountController } from './apis/account/account.controller'
import { AccountService } from './apis/account/account.service'
import config from '../config'

const ENTITIES = [
  CatEntity,
  DogEntity,
  UserEntity,
]

@Module({
  imports: [
    TypeOrmModule.forRoot(config.orm as TypeOrmModuleOptions),
    TypeOrmModule.forFeature([...ENTITIES]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register(config.jwt),
  ],
  controllers: [
    CatsController,
    DogsController,
    AccountController,
  ],
  providers: [
    CatsService,
    DogsService,
    AuthService,
    JwtStrategy,
    AccountService,
  ],
  exports: [],
})
export class FeaturesModule {
}
