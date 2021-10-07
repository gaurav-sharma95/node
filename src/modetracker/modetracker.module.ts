import { Module } from '@nestjs/common';
import { ModetrackerService } from './modetracker.service';
import { ModetrackerController } from './modetracker.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModetrackerEntity } from './modetracker.entity';
@Module({
  
  imports:[TypeOrmModule.forFeature([ModetrackerEntity])],
  providers: [ModetrackerService],
  controllers: [ModetrackerController]
})
export class ModetrackerModule {}
