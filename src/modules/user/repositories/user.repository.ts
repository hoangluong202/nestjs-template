import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  helloRepository(): string {
    return 'Data to be returned from db';
  }
}
