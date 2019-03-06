import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

const ignorePath = [/\/auth\/*/, /^\/assets\/*/, /^\/favicon.ico$/]

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      if (!ignorePath.find(path => path.test(req.originalUrl)) && !req.session.username) {
        res.redirect('/auth/logout')
        res.end()
      } else {
        next()
      }
    };
  }
}