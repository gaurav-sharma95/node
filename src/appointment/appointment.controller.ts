import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AppointmentEntity } from './appointment.entity';
import { AppointmentService } from './appointment.service';

@Controller('appointment')
export class AppointmentController {

    constructor(private readonly appService: AppointmentService) {}
    
    @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }
    @Post('create')
    create(@Body() modetracker:AppointmentEntity){
      return this.appService.create(modetracker)

    }
    @Put('update')
    update(@Body() modetracker:AppointmentEntity){
      return this.appService.update(modetracker);

    }
}
