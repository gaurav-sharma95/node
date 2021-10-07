import { Module } from '@nestjs/common';
import { LocationhistoryService } from './locationhistory.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { LocationhistoryController } from './locationhistory.controller';
import { LocationhistoryEntity } from './locationhistory.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LocationhistoryEntity])],
  providers: [LocationhistoryService],
  controllers: [LocationhistoryController]
})
export class LocationhistoryModule {}
