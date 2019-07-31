import { Global, HttpModule, Module } from '@nestjs/common'

import { LunarCalendarService } from './services/lunar-calendar/lunar-calendar.service'

@Global()
@Module({
  imports: [HttpModule],
  providers: [LunarCalendarService],
  exports: [HttpModule, LunarCalendarService],
})
export class SharedModule {}
