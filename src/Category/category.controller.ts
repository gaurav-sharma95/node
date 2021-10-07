import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { Category } from './category.entity';
import { CategoryService } from './category.service';
import 'dotenv/config';

@Controller('category')
export class CategoryController {
  constructor(private  appService: CategoryService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Get('/all')
    all(@Param() params) {
      return this.appService.findAll();
  }

    @Post('create')
    create(@Body() category:Category){
      return this.appService.create(category)
    }
      @Put('update')
      update(@Body() category:Category){
        return this.appService.update(category);
  
      }
}
