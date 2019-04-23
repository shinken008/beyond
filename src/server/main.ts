import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './server.module';
import session from 'express-session'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import middlewares from './middlewares'

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

  app.use((req, res, next) => {
    console.log('req.url', req.url)
    console.log('req.path', req.path)
    console.log('req.originalUrl', req.originalUrl)
    next()
  })

  app.use(cookieParser())

  middlewares(app)

  await app.listen(8080, () => console.log('Server start in 8080'));
}
bootstrap();