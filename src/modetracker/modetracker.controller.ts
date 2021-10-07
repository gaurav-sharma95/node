import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { ModetrackerService } from './modetracker.service';
import 'dotenv/config';
import { ModetrackerEntity } from './modetracker.entity';
@Controller('modetracker')
export class ModetrackerController {
    constructor(private readonly appService: ModetrackerService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() modetracker:ModetrackerEntity){
      return this.appService.create(modetracker)

    }
    @Put('update')
    update(@Body() user:ModetrackerEntity){
      return this.appService.update(user);

    }
}
