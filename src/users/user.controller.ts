import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { User } from './user.entity';
import { UserService } from './user.service';
import 'dotenv/config';
import { Country } from 'src/country/country.entity';
import { Json } from 'src/json.dto';

@Controller('users')
export class UserController {
  constructor(private  appService: UserService) {}

  @Get(':id')
    get(@Param() params) {
        return this.appService.getUsers(params.id);
    }


    @Post('/country')
    getCOuntryWise(@Body() user:Json) {
        return this.appService.getCOuntryWise(user);
    }

    @Post('create')
    create(@Body() user:User){
      return this.appService.create(user)
    }
      @Put('update')
      update(@Body() user:User){
        return this.appService.update(user);
  
      }
}
