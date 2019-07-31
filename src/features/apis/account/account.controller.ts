import { Body, Controller, Post } from '@nestjs/common'
import { ApiImplicitBody, ApiUseTags } from '@nestjs/swagger'

import { AccountDto } from '../../dtos/account.dto'
import { Token } from '../../interfaces/auth.interface'

import { AccountService } from './account.service'

@ApiUseTags('account')
@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  // 注册
  @Post('signUp')
  async signUp(@Body() authDto: AccountDto): Promise<void> {
    return await this.accountService.signUp(authDto)
  }

  // 登录
  @Post('signIn')
  async signIn(@Body() authDto: AccountDto): Promise<Token> {
    return await this.accountService.signIn(authDto)
  }
}
