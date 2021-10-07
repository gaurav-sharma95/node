import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';

import { Credential } from './credential.entity';
import { CredentialService } from './credential.service';
import 'dotenv/config';

@Controller('credential')
export class CredentialController {
  constructor(private  appService: CredentialService) {}

  @Post('login')
    get(@Body() category:Credential){
        return this.appService.getUsers(category);
    }
    @Get('/all')
    all(@Param() params) {
      return this.appService.findAll();
  }

    @Post('create')
    create(@Body() category:Credential){
      return this.appService.create(category)
    }
      @Put('update')
      update(@Body() category:Credential){
        return this.appService.update(category);
  
      }
}
