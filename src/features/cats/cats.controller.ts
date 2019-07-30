import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Post, UseInterceptors } from '@nestjs/common'

import { CatsService } from './cats.service'
import { CreateCatDto } from './cat.dto'
import { CatEntity } from '../entities/cat.entity'

@Controller('cats')
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
