import { NestFactory } from '@nestjs/core'

import { AppModule } from './app.module'
import { ValidationPipe } from './core/pipe/validation.pipe'
import { TransformInterceptor } from './core/interceptor/transform.interceptor'
import { ExceptionsFilter } from './core/filter/errors.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix('api/v1')

  app.useGlobalFilters(new ExceptionsFilter())
  app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000)
}

bootstrap()
