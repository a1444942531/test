const startTime = Date.now();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common/pipes';
import { SerializeInterceptor } from './common/interceptors/serialize.interceptor';
import { PrismaExceptionFilter } from './common/fillters/prisma.exception.fillter';

async function bootstrap() {
  // 阿斯匹的教派设计的阿斯匹的教派设计的阿斯匹的教派设计的阿斯匹的教派设计的阿斯匹的教派设计的阿斯匹的教派设计的阿斯匹的教派设计的
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.REDIS,
  //   options: {
  //     host: 'localhost',
  //     port: 6379,
  //   },
  // })
  const app = await NestFactory.create(AppModule, {
    // bufferLogs: true,
  });
  
  // 引入日志
  app.useLogger(app.get(Logger))
  app.useGlobalPipes(new ValidationPipe({
  }));

  // 全局异常拦截器
  app.useGlobalFilters(new PrismaExceptionFilter())
  // 全局返回拦截器
  // app.useGlobalInterceptors(new SerializeInterceptor())

  // app.setGlobalPrefix('api/v2');
  await app.listen(8888);
}
bootstrap();

console.log(`Application started in ${Date.now() - startTime}ms`);