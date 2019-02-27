import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ResponseBodyInterceptor } from '../utils/interceptor'

@Controller('api')
@UseInterceptors(ResponseBodyInterceptor)
export class ApiController {

  @Get('user')
  root() {
    return 'welcome user!'
  }
}