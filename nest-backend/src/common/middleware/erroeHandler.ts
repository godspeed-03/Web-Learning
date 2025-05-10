import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { Response } from 'express';
  
  @Catch()
  export class AllExceptionsFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
  
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
  
      const exceptionResponse =
        exception instanceof HttpException
          ? exception.getResponse()
          : null;
  
      let message = 'Internal server error';
  
      if (typeof exceptionResponse === 'string') {
        message = exceptionResponse;
      } else if (
        exceptionResponse &&
        typeof exceptionResponse === 'object' &&
        'message' in exceptionResponse
      ) {
        message = (exceptionResponse as any).message;
      } else if (exception instanceof Error) {
        message = exception.message;
      }
  
      response.status(status).json({
        success: false,
        message,
        errors: [],
        data: null,
        statusCode: status,
      });
    }
  }
  