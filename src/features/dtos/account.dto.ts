import { IsEmail, IsString } from 'class-validator'

export class AccountDto {
  @IsString()
  @IsEmail()
  readonly email: string

  @IsString()
  readonly password: string
}
