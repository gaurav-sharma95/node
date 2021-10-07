// import { Controller } from '@nestjs/common';
import { BlogEntity } from './blog.entity';
import { BlogService } from './blog.service';
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

@Controller('blog')
export class BlogController {
    constructor(private  appService: BlogService) {}

    @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Get('/all')
    all(@Param() params) {
      return this.appService.findAll();
  }

    @Post('create')
    create(@Body() category:BlogEntity){
      return this.appService.create(category)
    }
    //   @Put('update')
    //   update(@Body() category:BlogEntity){
    //     return this.appService.update(category);
  
    //   }
    
}
