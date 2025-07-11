import { Module } from '@nestjs/common';
import { AutoService } from './auto.service';
import { AutoResolver } from './auto.resolver';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [JwtModule.registerAsync({
    inject: [ConfigService],
    global: true,
    useFactory: (configService: ConfigService) => {
      return {
        secret: configService.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1d'
        }
      }
    },
  }),],
  controllers: [],
  providers: [AutoService, AutoResolver],
  exports: []
})
export class AutoModule { }
