import { Body, Controller, Post } from '@nestjs/common'
import { AccountDto } from '../../dtos/account.dto'
import { AccountService } from './account.service'
import { Token } from '../../interfaces/auth.interface'

@Controller()
export class AccountController {
  constructor(private readonly accountService: AccountService) {
  }

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
