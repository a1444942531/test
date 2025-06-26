import { Controller, Get, Inject, Logger, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { Cache, CACHE_MANAGER, CacheInterceptor, CacheTTL } from '@nestjs/cache-manager';
import { PrismaService } from 'src/database/prisma/prisma1.service';
import { PrismaService as Prisma2Service } from 'src/database/prisma/prisma2.service';

let ttl = 1

@Controller()
export class AppController {
  // private readonly logger = new Logger(AppController.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly appService: AppService,
    @InjectPinoLogger(AppController.name)
    private readonly logger: PinoLogger,
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    private readonly prismaService: PrismaService,
    private readonly prisma2Service: Prisma2Service
  ) { }

  @Get()
  async getHello() {
    console.log(this.configService.get('DATABASE_USER'))

    this.logger.error('你好世界');

    this.cacheManager.set('key2', {
      username: '用户剧名'
    });

    return this.appService.getHello();
  }

  @Get('/cache')
  async getCache() {
    return await this.cacheManager.get<string>('key2');
  }

  @UseInterceptors(CacheInterceptor)
  @CacheTTL(2000)
  @Get('/cache-interceptor')
  async getCacheInterceptor() {
    return ttl++;
  }

  @Get('/user')
  async getUser() {
    return await this.prismaService.user.findMany();
  }

  @Get('/add-user')
  async addUser() {
    return await this.prismaService.user.create({
      data: {
        username: '用户' + Math.random(),
        password: 'password'
      }
    })
  }

  @Get('/user2')
  async getUser2() {
    return await this.prisma2Service.user.findMany();
  }

  @Get('/add-user2')
  async addUser2() {
    return await this.prisma2Service.user.create({
      data: {
        username: '用户' + Math.random(),
        password: 'password'
      }
    })
  }
}
