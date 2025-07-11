import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user.resolver';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UserResolver],
  exports: []
})
export class UserModule {}
