import { Module } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';
import { AppointmentEntity } from './appointment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forFeature([AppointmentEntity])],
  providers: [AppointmentService],
  controllers: [AppointmentController]
})
export class AppointmentModule {}
