import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserEntity } from '../domains/entities/user.entity';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('hello')
  test(): string {
    return this.userService.callFuncService();
  }

  @Get('')
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}
