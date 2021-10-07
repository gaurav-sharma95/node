import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { Country } from './country.entity';
import { CountryService } from './country.service';
import 'dotenv/config';

@Controller('country')
export class CountryController {
  constructor(private  appService: CountryService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }

    @Get('/all')
    all(@Param() params) {
        return this.appService.findAll();
    }

    @Post('create')
    create(@Body() country:Country){
      return this.appService.create(country)
    }
      @Put('update')
      update(@Body() country:Country){
        return this.appService.update(country);
  
      }
}
