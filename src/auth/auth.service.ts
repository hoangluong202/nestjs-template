import { Injectable } from '@nestjs/common';
import { AuthRegisterLoginDto } from './dto/auth-register-login.dto';

@Injectable()
export class AuthService {
  async login(loginDto: AuthRegisterLoginDto) {
    console.log(loginDto);
    return 'Hello World!';
  }
}
