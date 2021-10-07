import { Injectable } from '@nestjs/common';
import { AppointmentEntity } from './appointment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class AppointmentService {

    constructor(
        @InjectRepository(AppointmentEntity)
        private userRepository: Repository<AppointmentEntity>,
      ) {}
      async getUsers(livechat: AppointmentEntity): Promise<AppointmentEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: AppointmentEntity): Promise<AppointmentEntity> {
    return await this.userRepository.save(modetracker);
  }
  
  async update(appointment: AppointmentEntity): Promise<UpdateResult> {
    return await this.userRepository.update(String(appointment.id),appointment);
  }
  
  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
}
}
