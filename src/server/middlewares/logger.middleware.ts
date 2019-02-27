import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      const startTime = Date.now()
      console.log(`HTTP_REQUEST_INFO: start ${req.method} ${req.url} ================`)
      res.on('finish', () => {
        const cost = Date.now() - startTime
        console.log(`HTTP_REQUEST_INFO: end ${req.method} ${req.url} ${res.statusCode} - ${cost} ms ================`)
      })
      next();
    };
  }
}