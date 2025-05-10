import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
  } from '@nestjs/common';
  import { Observable } from 'rxjs';
  import { map } from 'rxjs/operators';
  
  @Injectable()
  export class ResponseInterceptor<T> implements NestInterceptor<T, any> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
      const ctx = context.switchToHttp();
      const response = ctx.getResponse();
    //   console.log(response)
      return next.handle().pipe(
        map((data) => {
          // Check if the response contains the necessary fields
          const statusCode = data?.statusCode || response.statusCode || 200;
          const message = data?.message || 'OK';
          const result = data?.data || null;
  
          return {
            success: statusCode < 400,
            message: message,
            data: result,
            statusCode: statusCode,
          };
        }),
      );
    }
  }
  