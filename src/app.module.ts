import { createKeyv } from '@keyv/redis';
import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { LoggerModule } from 'nestjs-pino';
import { AutoModule } from './auto/auto.module';
import { PrismaModule } from './database/prisma/prisma.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserModule } from './modules/user/user.module';

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath,
    load: [() => dotenv.config({ path: '.env' })],
  }), AutoModule,
  GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    autoSchemaFile: true,
    graphiql: process.env.NODE_ENV != 'production',
  }),
  CacheModule.registerAsync({
    isGlobal: true,
    useFactory: async () => {
      return {
        stores: [
          createKeyv('redis://localhost:6379'),
        ]
      }
    }
  }),
  LoggerModule.forRoot({
    pinoHttp: {
      transport: process.env.NODE_ENV == 'production' ? {
        target: 'pino-roll',
        options: {
          file: 'logs/log',
          frequency: 'daily',
          size: '10m',
          mkdir: true,
          dateFormat: 'yyyy-MM-dd'
        }
      } : {
        target: 'pino-pretty',
        options: {
          colorize: true,
        }
      }
    }
  }),

    UserModule, PrismaModule],
  controllers: [],
  providers: [
  ],
})
export class AppModule {
}
