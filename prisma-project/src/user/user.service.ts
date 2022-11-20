import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  prisma = new PrismaClient();

  async findRelation() {
    return await this.prisma.user.findMany({ include: { posts: true } });
  }
}
