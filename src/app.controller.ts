import { Controller, Get, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  @HttpCode(200)
  getHealth(): string {
    return 'OK';
  }

  @Get('server')
  getServer(): string {
    return 'Server 2';
  }
}
