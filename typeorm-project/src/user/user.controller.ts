import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUserList() {
    console.time('TypeORM');
    const result = await this.userService.findRelation();
    console.timeEnd('TypeORM');
    return result;
  }
}
