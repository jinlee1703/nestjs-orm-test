import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  async getUserList() {
    console.time('Prisma');
    const result = await this.userService.findRelation();
    console.timeEnd('Prisma');
    return result;
  }
}
