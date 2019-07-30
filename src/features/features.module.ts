import { Module } from '@nestjs/common'
import { CatsController } from './cats/cats.controller'
import { DogsController } from './dogs/dogs.controller'
import { CatsService } from './cats/cats.service'
import { DogsService } from './dogs/dogs.service'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import { CatEntity } from './entities/cat.entity'
import { DogEntity } from './entities/dog.entity'
import { UserEntity } from './entities/user.entity'
import { AuthService } from './auth/auth.service'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './auth/jwt.strategy'
import { AccountController } from './account/account.controller'
import { AccountService } from './account/account.service'
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
