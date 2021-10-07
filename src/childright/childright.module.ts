import { Module } from '@nestjs/common';
import { ChildrightService } from './childright.service';
import { ChildrightController } from './childright.controller';
import { ChildrightEntity } from './childright.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([ChildrightEntity])],
  providers: [ChildrightService],
  controllers: [ChildrightController]
})
export class ChildrightModule {}
