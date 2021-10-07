import { Module } from '@nestjs/common';
import { LivechatService } from './livechat.service';
import { LivechatController } from './livechat.controller';

import { TypeOrmModule } from '@nestjs/typeorm';

import {LivechatEntity} from './livechat.entity'
@Module({
  imports:[TypeOrmModule.forFeature([LivechatEntity])],
  providers: [LivechatService],
  controllers: [LivechatController]
})
export class LivechatModule {}
