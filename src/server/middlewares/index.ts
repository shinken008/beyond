import AuthMiddleware from './auth.middleware'
import LoggerMiddleware from './logger.middleware'

export default function middlewares(app) {
  app.use(LoggerMiddleware)
  app.use(AuthMiddleware)
}