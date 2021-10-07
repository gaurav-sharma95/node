import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { Language } from './language.entity';
import { LanguageService } from './language.service';
import 'dotenv/config';

@Controller('language')
export class LanguageController {
  constructor(private  appService: LanguageService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Get('/all')
    all(@Param() params) {
      return this.appService.findAll();
  }

    @Post('create')
    create(@Body() country:Language){
      return this.appService.create(country)
    }
      @Put('update')
      update(@Body() country:Language){
        return this.appService.update(country);
  
      }
}
