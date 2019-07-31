import { HttpService, Injectable } from '@nestjs/common'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

@Injectable()
export class LunarCalendarService {
  constructor(private readonly httpService: HttpService) {}

  getLunarCalendar(): Observable<any> {
    return this.httpService.get('https://www.sojson.com/open/api/lunar/json.shtml').pipe(map(res => res.data.data))
  }
}
