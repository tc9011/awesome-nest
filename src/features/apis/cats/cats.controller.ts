import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Render,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger'
import { EntityManager, Transaction, TransactionManager } from 'typeorm'

import { CreateCatDto } from '../../dtos/cat.dto'
import { CatEntity } from '../../entities/cat.entity'

import { CatsService } from './cats.service'

@ApiUseTags('cats')
@ApiBearerAuth()
@Controller('cats')
@UseGuards(AuthGuard())
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get('page')
  @Render('catsPage')
  getCatsPage(): Promise<any> {
    return this.catsService.getCats()
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  findOne(@Param('id') id: string): Promise<Partial<CatEntity>[]> {
    return this.catsService.getCat(id)
  }

  @Post()
  create(@Body() createCatDto: CreateCatDto): Promise<void> {
    return this.catsService.createCat(createCatDto)
  }

  @Delete(':name')
  @Transaction()
  delete(
    @Param('name') name: string,
    @TransactionManager() manager: EntityManager,
  ): Promise<void> {
    return this.catsService.deleteCat(name, manager)
  }
}
