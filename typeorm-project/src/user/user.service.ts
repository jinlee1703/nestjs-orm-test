import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findRelation(): Promise<User[] | undefined> {
    console.time('TypeORM');
    const result = await this.userRepository.find({ relations: ['posts'] });
    console.timeEnd('TypeORM');
    return result;
  }
}
