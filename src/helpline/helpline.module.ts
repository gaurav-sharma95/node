import { Module } from '@nestjs/common';
import { HelplineService } from './helpline.service';
import { HelplineController } from './helpline.controller';
import { HelplineEntity } from './helpline.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([HelplineEntity])],
  providers: [HelplineService],
  controllers: [HelplineController]
})
export class HelplineModule {}
