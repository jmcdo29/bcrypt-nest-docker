import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Post()
  async testHash(@Body() body): Promise<boolean> {
    return this.appService.sameHash(body.hash, body.originalValue);
  }
}
