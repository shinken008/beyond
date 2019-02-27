import { NestMiddleware } from '@nestjs/common'

const METADATA_KEY = {
  controller: '_controller',
  controllerMethod: '_controller-method',
  controllerParameter: '_controller-parameter',
  controllerBefore: '_controller-before',
  controllerAfter: '_controller-after',
}

const After = (reducer: (result: Promise<any>, req: Request, res: Response, next?: NestMiddleware) => void) => (target: object, key: any) => {
  if (key) {
    Reflect.defineMetadata(METADATA_KEY.controllerAfter, reducer, target.constructor, key)
  } else {
    Reflect.defineMetadata(METADATA_KEY.controllerAfter, reducer, target.constructor)
  }
}

export const ResponseBody = After((result, req, res) => {
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
})



