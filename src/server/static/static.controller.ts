import { Controller, Get, Res, Req } from '@nestjs/common';
import { join } from 'path';

import { FOLDER_PUBLIC } from '../../common/constants';

@Controller()
export class StaticController {

  @Get('*')
  serveStatic(@Res() res, @Req() req) {

    return res.sendFile(join(FOLDER_PUBLIC, req.originalUrl));
  }
}