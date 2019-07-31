import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common'
import { plainToClass } from 'class-transformer'
import { validate } from 'class-validator'
import * as _ from 'lodash'

@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value, metadata: ArgumentMetadata) {
    const { metatype } = metadata
    if (!metatype || !this.toValidate(metatype)) {
      return value
    }
    const object = plainToClass(metatype, value)
    const errors = await validate(object)
    if (errors.length > 0) {
      const errorMessage = _.values(errors[0].constraints)[0]
      throw new BadRequestException(errorMessage)
    }
    return value
  }

  private toValidate(metatype): boolean {
    const types = [String, Boolean, Number, Array, Object]
    return !types.find(type => metatype === type)
  }
}
