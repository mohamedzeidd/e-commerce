import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { env } from 'src/config/env';

@Injectable()
export class BcryptService {
  private readonly saltRounds = 10;
  private paper: string;
  constructor() {
    this.paper = env().bcrypt.pepper || '';
  }
  async hash(password: string): Promise<string> {
    return bcrypt.hash(password + this.paper, this.saltRounds);
  }
  async compare(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword + this.paper, hashedPassword);
  }
}
