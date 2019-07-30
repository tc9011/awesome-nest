import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common'
import { UserEntity } from '../entities/user.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Token } from './auth.interface'
import config from '../../config'

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {
  }

  createToken(email: string): Token {
    const accessToken = this.jwtService.sign({ email })
    return {
      expires_in: config.jwt.signOptions.expiresIn,
      access_token: accessToken,
    }
  }

  async validateUser(payload: UserEntity): Promise<any> {
    return await this.userRepository.find({ email: payload.email })
  }
}
