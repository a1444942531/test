import { Module } from '@nestjs/common';
import { AutoController } from './auto.controller';
import { AutoService } from './auto.service';

@Module({
  imports: [],
  controllers: [AutoController,],
  providers: [AutoService,],
  exports: []
})
export class AutoModule { }
