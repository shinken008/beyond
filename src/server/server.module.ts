import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { AuthMiddleware } from './middlewares/auth.middleware'
import { LoggerMiddleware } from './middlewares/logger.middleware';

@Module({
  imports: [AuthModule, ApiModule, StaticModule],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('*')
      .apply(LoggerMiddleware)
      .forRoutes('*')
  }
}