import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import * as session from 'express-session'
import * as bodyParser from 'body-parser'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.use(bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1000, // 1MB
  }))
  app.use(bodyParser.json({
    limit: 1024 * 1000, // 1MB
  }))

  app.use(session({
    secret: 'beyond',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))

  await app.listen(8080);
}
bootstrap();