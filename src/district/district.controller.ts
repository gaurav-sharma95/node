import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { District } from './district.entity';
import { DistrictService } from './district.service';
import 'dotenv/config';

@Controller('district')
export class DistrictController {
  constructor(private  appService: DistrictService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }

    @Get('/all')
    all() {
        return this.appService.findAll();
    }


    @Get('/')
    allData() {
        return this.appService.findAll();
    }
    @Post('create')
    create(@Body() country:District){
      return this.appService.create(country)
    }
      @Put('update')
      update(@Body() country:District){
        return this.appService.update(country);
  
      }
}
