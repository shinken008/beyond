import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ResponseBodyInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(map(result => {
      if (result instanceof Error) {
        return {
          status: 0,
          msg: result.message,
        }
      } else {
        return {
          status: 1,
          data: result,
        }
      }
    }))
  }
}
