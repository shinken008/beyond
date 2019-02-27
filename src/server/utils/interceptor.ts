import { Injectable, NestInterceptor, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';

// @Injectable()
// export class LoggingInterceptor implements NestInterceptor {
//   intercept(
//     context: ExecutionContext,
//     call$: Observable<any>,
//   ): Observable<any> {
//     console.log('Before...');

//     const now = Date.now();
//     return call$.pipe(
//       tap(() => console.log(`After... ${Date.now() - now}ms`)),
//     );
//   }
// }

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
