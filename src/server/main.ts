import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import * as session from 'express-session'
import * as bodyParser from 'body-parser'
import * as cookieParser from 'cookie-parser'

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
    cookie: {
      secure: false,
      maxAge: 0.5 * 60 * 60 * 1000, // 0.5h
    },
  }))

  app.use(cookieParser())

  await app.listen(8080, () => console.log('Server start in 8080'));
}
bootstrap();