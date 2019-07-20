import {
  Catch,
  ArgumentsHost,
  HttpException,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class ExceptionsFilter implements ExceptionFilter {
  async catch(exception, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let message = exception.message;
    let isDeepestMessage = false;
    while (!isDeepestMessage) {
      isDeepestMessage = !message.message;
      message = isDeepestMessage ? message : message.message;
    }

    const errorResponse = {
      message: message || '请求失败',
      status: 1,
    };

    const status = exception instanceof HttpException ?
      exception.getStatus() :
      HttpStatus.INTERNAL_SERVER_ERROR;

    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
