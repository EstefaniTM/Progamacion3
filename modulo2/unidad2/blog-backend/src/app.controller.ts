import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('health')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHealth(): { service: string, version: string, status: boolean } {
    return this.appService.getHealth();
  }
}