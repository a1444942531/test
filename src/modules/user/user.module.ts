import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [UserService, AppService, UserResolver],
  exports: []
})
export class UserModule { }
