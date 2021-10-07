import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LivechatService } from './livechat.service';
import 'dotenv/config';
import { LivechatEntity } from './livechat.entity';

@Controller('livechat')
export class LivechatController {
    constructor(private readonly appService: LivechatService) {}
    
    @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() modetracker:LivechatEntity){
      return this.appService.create(modetracker)

    }
    @Put('update')
    update(@Body() user:LivechatEntity){
      return this.appService.update(user);

    }
}
