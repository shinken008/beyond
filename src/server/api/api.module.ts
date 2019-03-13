import { Module } from '@nestjs/common';
import { APIController } from '../api/api.controller'

@Module({
  controllers: [APIController],
})
export class APIModule { }
