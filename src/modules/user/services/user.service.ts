import { Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserEntity } from '../domains/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  callFuncService(): string {
    return this.userRepository.helloRepository();
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.findAll();
  }
}
