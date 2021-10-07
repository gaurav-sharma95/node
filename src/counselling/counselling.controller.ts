import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { Counselling } from './counselling.entity';
import { CounsellingService } from './counselling.service';
import 'dotenv/config';

@Controller('counselling')
export class CounsellingController {
  constructor(private  appService: CounsellingService) {}

  @Post('login')
    get(@Body() category:Counselling){
        return this.appService.getUsers(category);
    }
    @Get('/all')
    all(@Param() params) {
      return this.appService.findAll();
  }

    @Post('create')
    create(@Body() category:Counselling){
      return this.appService.create(category)
    }
      @Put('update')
      update(@Body() category:Counselling){
        return this.appService.update(category);
  
      }
}
