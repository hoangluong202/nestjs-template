import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private configService: ConfigService,
  ) {}

  callFuncService(): string {
    console.log(this.configService.get<string>('DB_TYPE'));
    console.log(this.configService.get<string>('DB_HOST'));
    console.log(this.configService.get<number>('DB_PORT'));
    console.log(this.configService.get<string>('DB_USER'));
    console.log(this.configService.get<string>('DB_PASSWORD'));
    console.log(this.configService.get<string>('DB_NAME'));
    return this.userRepository.helloRepository();
  }
}
