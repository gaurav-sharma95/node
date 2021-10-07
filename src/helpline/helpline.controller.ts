import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { HelplineEntity } from './helpline.entity';
import { HelplineService } from './helpline.service';

@Controller('helpline')
export class HelplineController {
    constructor(private readonly appService: HelplineService) {}
    
    @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() modetracker:HelplineEntity){
      return this.appService.create(modetracker)

    }
    @Put('update')
    update(@Body() user:HelplineEntity){
      return this.appService.update(user);

    }
}
