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
    return 'Data to be returned from db';
  }

  findAll(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }
}
