import { ApiModelProperty } from '@nestjs/swagger'
import { IsEmail, IsString } from 'class-validator'

export class AccountDto {
  @ApiModelProperty()
  @IsString()
  @IsEmail()
  readonly email: string

  @ApiModelProperty()
  @IsString()
  readonly password: string
}
