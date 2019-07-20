import { Body, Controller, Get, Post } from '@nestjs/common';

import { CatsService } from './cats.service';
import { CreateCatDto } from './cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  findAll(): string {
    return this.catsService.getCats();
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
