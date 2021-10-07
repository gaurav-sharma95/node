import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ModetrackerEntity } from './modetracker.entity';

import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class ModetrackerService {
    constructor(
        @InjectRepository(ModetrackerEntity)
        private userRepository: Repository<ModetrackerEntity>,
      ) {}
    
      async getUsers(modetracker: ModetrackerEntity): Promise<ModetrackerEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: ModetrackerEntity): Promise<ModetrackerEntity> {
  return await this.userRepository.save(modetracker);
}

async update(modetracker: ModetrackerEntity): Promise<UpdateResult> {
  return await this.userRepository.update(String(modetracker.id),modetracker);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}
}
