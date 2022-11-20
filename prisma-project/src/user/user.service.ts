import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async findRelation() {
    console.time('Prisma');
    const result = await this.prisma.user.findMany({
      include: { posts: true },
    });
    console.timeEnd('Prisma');
    return result;
  }
}
