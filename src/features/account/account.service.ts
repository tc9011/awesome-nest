import { Injectable } from '@nestjs/common'
import { AccountDto } from './account.dto'
import { JwtService } from '@nestjs/jwt'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from '../entities/user.entity'
import { Repository } from 'typeorm'
import { AuthService } from '../auth/auth.service'
import { Token } from '../auth/auth.interface'

@Injectable()
export class AccountService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {
  }
  async signIn(authDto: AccountDto): Promise<Token> {
    return this.authService.createToken(authDto.email)
  }

  async signUp(authDto: AccountDto): Promise<void> {
    await this.userRepository.save(authDto)
  }
}
