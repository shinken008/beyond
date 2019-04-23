import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { APIModule } from './api/api.module';
import { AuthModule } from './auth/auth.module';
import { StaticModule } from './static/static.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    APIModule,
    StaticModule,
    TypeOrmModule.forRoot(),
  ],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}