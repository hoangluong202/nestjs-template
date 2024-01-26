import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../domains/entities/user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  helloRepository(): string {
    return 'Hello World!';
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
