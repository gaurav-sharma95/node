import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationhistoryEntity } from './locationhistory.entity';

import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class LocationhistoryService {

    constructor(
        @InjectRepository(LocationhistoryEntity)
        private userRepository: Repository<LocationhistoryEntity>,
      ) {}
    
      async getUsers(modetracker: LocationhistoryEntity): Promise<LocationhistoryEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: LocationhistoryEntity): Promise<LocationhistoryEntity> {
  return await this.userRepository.save(modetracker);
}

async update(modetracker: LocationhistoryEntity): Promise<UpdateResult> {
  return await this.userRepository.update(String(modetracker.id),modetracker);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}
}
