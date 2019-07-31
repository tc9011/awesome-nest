import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common'
import * as Youch from 'youch'

import { isProd } from '../../config'
import { Logger } from '../../shared/utils/logger'

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()
    const request = ctx.getRequest()

    Logger.error('exception', JSON.stringify(exception))

    let message = exception.message
    let isDeepestMessage = false
    while (!isDeepestMessage) {
      isDeepestMessage = !message.message
      message = isDeepestMessage ? message : message.message
    }

    const errorResponse = {
      message: message || '请求失败',
      status: 1,
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus()
      Logger.error(
        `Catch http exception at ${request.method} ${request.url} ${status}`,
      )

      response.status(status)
      response.header('Content-Type', 'application/json; charset=utf-8')
      response.send(errorResponse)
    } else {
      if (!isProd) {
        const youch = new Youch(exception, request)

        const html = await youch
          .addLink(link => {
            const url = `https://stackoverflow.com/search?q=${encodeURIComponent(
              `[adonis.js] ${link.message}`,
            )}`
            return `<a href="${url}" target="_blank" title="Search on StackOverflow">Search StackOverflow</a>`
          })
          .toHTML()

        response.type('text/html')
        response.status(HttpStatus.INTERNAL_SERVER_ERROR)
        response.send(html)
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR)
        response.header('Content-Type', 'application/json; charset=utf-8')
        response.send(errorResponse)
      }
    }
  }
}
