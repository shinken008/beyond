import { Module } from '@nestjs/common';
import { APIController } from '../api/api.controller'
import { UsersModule } from '../users/users.module'

@Module({
  controllers: [APIController],
  imports: [UsersModule]
})
export class APIModule { }
