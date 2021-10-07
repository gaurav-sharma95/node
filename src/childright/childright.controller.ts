import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ChildrightEntity } from './childright.entity';
import { ChildrightService } from './childright.service';

@Controller('childright')
export class ChildrightController {
    
    constructor(private readonly appService: ChildrightService) {}
    
    @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() modetracker:ChildrightEntity){
      return this.appService.create(modetracker)

    }
    @Put('update')
    update(@Body() user:ChildrightEntity){
      return this.appService.update(user);

    }
}
