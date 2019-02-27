import { Controller, Get, Post, Res, Param, Body, UseInterceptors, Render, Req } from '@nestjs/common';
import { join } from 'path'
import { ResponseBodyInterceptor } from '../utils/interceptor'
import { FOLDER_SERVER, FOLDER_DIST } from '../../common/constants';

@Controller('auth')
@UseInterceptors(ResponseBodyInterceptor)
export class AuthController {

  @Post('login')
  login(@Body() body, @Res() res, @Req() req) {
    if (/^1\d{10}$/.test(body.mobile)) {
      req.session.username = body.mobile
    }
    res.redirect('/')
  }

  @Get('logout')
  logout(@Res() res) {
    return res.sendFile(join(FOLDER_DIST, FOLDER_SERVER, 'auth/login.html'));
  }
}