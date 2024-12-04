import { Controller, Get, Post} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log("Getting...");
    return this.appService.getHello();
  }

  @Post()
  postContact(email){
    console.log(email);
    return'';
  }

}
