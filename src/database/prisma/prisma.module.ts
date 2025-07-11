import { Global, Module } from '@nestjs/common';
import { PrismaService as PrismaMysql1 } from './prisma1.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [PrismaMysql1],
  exports: [PrismaMysql1]
})
export class PrismaModule { }
