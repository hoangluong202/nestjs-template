import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello')
  getHello(): string {
    return this.userService.getHello();
  }
}
