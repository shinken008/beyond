import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { ResponseBodyInterceptor } from '../utils/interceptor'

@Controller('api')
@UseInterceptors(ResponseBodyInterceptor)
export class APIController { }