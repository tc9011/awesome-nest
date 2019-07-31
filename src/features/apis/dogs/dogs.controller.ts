import {
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
} from '@nestjs/common'
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger'
import { Crud, CrudController } from '@nestjsx/crud'

import { DogEntity } from '../../entities/dog.entity'

import { DogsService } from './dogs.service'

@ApiUseTags('dogs')
@ApiBearerAuth()
@Crud({
  model: {
    type: DogEntity,
  },
})
@UseInterceptors(ClassSerializerInterceptor)
@Controller('dogs')
export class DogsController implements CrudController<DogEntity> {
  constructor(public service: DogsService) {}
}
