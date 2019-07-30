import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'

import { CatsService } from './cats.service'
import { CreateCatDto } from './cat.dto'
import { CatEntity } from '../entities/cat.entity'
import { AuthGuard } from '@nestjs/passport'

@Controller('cats')
@UseGuards(AuthGuard())
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<Array<Partial<CatEntity>>> {
    return this.catsService.getCat(id)
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.createCat(createCatDto)
  }
}
