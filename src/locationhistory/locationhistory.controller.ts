import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { LocationhistoryEntity } from './locationhistory.entity';
import { LocationhistoryService } from './locationhistory.service';

@Controller('locationhistory')
export class LocationhistoryController {


    constructor(private readonly appService: LocationhistoryService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() locationhistory:LocationhistoryEntity){
      return this.appService.create(locationhistory)

    }
    @Put('update')
    update(@Body() locationhistory:LocationhistoryEntity){
      return this.appService.update(locationhistory);

    }
}
