import { Module } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'bcrypt',
      useValue: bcrypt,
    },
  ],
})
export class AppModule {}
