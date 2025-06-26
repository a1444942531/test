import { Global, Module } from '@nestjs/common';
import { PrismaService as PrismaMysql1 } from './prisma1.service';
import { PrismaService as PrismaMysql2 } from './prisma2.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaMysql1, PrismaMysql2],
  exports: [PrismaMysql1, PrismaMysql2]
})
export class PrismaModule { }
