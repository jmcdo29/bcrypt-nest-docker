import { Inject, Injectable } from '@nestjs/common';
import * as Bcrypt from 'bcrypt';
@Injectable()
export class AppService {
  constructor(@Inject('bcrypt') private readonly bcrypt: typeof Bcrypt) {}
  async getHello(): Promise<string> {
    return this.bcrypt.hash('hello world!', 12);
  }

  async sameHash(hash: string, original: string): Promise<boolean> {
    return this.bcrypt.compare(original, hash);
  }
}
