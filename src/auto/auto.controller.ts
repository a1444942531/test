import { Controller, Get } from '@nestjs/common';
import { AutoService } from './auto.service';

@Controller()
export class AutoController {
  constructor(private readonly autoService: AutoService) { }

  @Get('/signin')
  async signIn() {
    return "这是注册接口"
  }
}
