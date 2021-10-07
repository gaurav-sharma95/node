import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { LivechatModule } from './livechat/livechat.module';
import { CountryModule } from './country/country.module';
import { LanguageModule } from './Language/language.module';
import { ModetrackerModule } from './modetracker/modetracker.module';
import { AppointmentModule } from './appointment/appointment.module';
import { HelplineModule } from './helpline/helpline.module';
import { ChildrightModule } from './childright/childright.module';
import { LocationhistoryModule } from './locationhistory/locationhistory.module';
import { BlogModule } from './blog/blog.module';

import 'dotenv/config';
import { CategoryModule } from './Category/category.module';
import { CredentialModule } from './credential/credential.module';
import { DistrictModule } from './district/district.module';
import { CounsellingModule } from './counselling/counselling.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "unicef-node.cxefcterqchw.ap-south-1.rds.amazonaws.com",
    port: 3306,
    username: "dotenv",
    password: "9Xze]Y^<bT",
    database: "dotenv",
    autoLoadEntities: true,
    // synchronize: true,
  }),UsersModule, LivechatModule,
   ModetrackerModule, AppointmentModule, 
   HelplineModule, ChildrightModule, LocationhistoryModule, 
   BlogModule,CountryModule,LanguageModule,CategoryModule,CredentialModule,DistrictModule,CounsellingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
