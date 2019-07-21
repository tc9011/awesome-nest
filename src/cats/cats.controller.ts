import { Body, Controller, Get, Param, Post } from '@nestjs/common'

import { CatsService } from './cats.service'
import { CreateCatDto } from './cat.dto'
import { CatEntity } from './cat.entity'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<CatEntity[]> {
    return this.catsService.getCat(id)
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat'
  }
}
