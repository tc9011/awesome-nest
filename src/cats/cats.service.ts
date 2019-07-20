import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  getCat(id: string): string {
    return `This action returns ${id} cats`;
  }
}
