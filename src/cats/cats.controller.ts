import { Controller, Get } from '@nestjs/common';

import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {
  }

  @Get()
  findAll(): string {
    return this.catsService.getCats();
  }
}
