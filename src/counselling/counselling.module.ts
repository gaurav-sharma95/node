import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounsellingController } from './counselling.controller';
import { CounsellingService } from './counselling.service';
import {Counselling} from './counselling.entity'

@Module({
    imports:[TypeOrmModule.forFeature([Counselling])],
    controllers:[CounsellingController],
    providers:[CounsellingService],
})
export class CounsellingModule {}
