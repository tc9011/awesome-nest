import { ApiModelProperty } from '@nestjs/swagger'
import { IsInt, IsString } from 'class-validator'

export class CreateCatDto {
  @ApiModelProperty()
  @IsString()
  readonly name: string

  @ApiModelProperty()
  @IsInt()
  readonly age: number

  @ApiModelProperty()
  @IsString()
  readonly breed: string
}
