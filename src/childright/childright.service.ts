
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChildrightEntity } from './childright.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
@Injectable()
export class ChildrightService {
    constructor(
        @InjectRepository(ChildrightEntity)
        private userRepository: Repository<ChildrightEntity>,
      ) {}
    
      async getUsers(modetracker: ChildrightEntity): Promise<ChildrightEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: ChildrightEntity): Promise<ChildrightEntity> {
  return await this.userRepository.save(modetracker);
}

async update(modetracker: ChildrightEntity): Promise<UpdateResult> {
  return await this.userRepository.update(String(modetracker.id),modetracker);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}
}
