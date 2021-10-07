import { Injectable } from '@nestjs/common';
import { HelplineEntity } from './helpline.entity';
import { UpdateResult, DeleteResult } from  'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
@Injectable()
export class HelplineService {
    constructor(
        @InjectRepository(HelplineEntity)
        private userRepository: Repository<HelplineEntity>,
      ) {}
    
      async getUsers(modetracker: HelplineEntity): Promise<HelplineEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: HelplineEntity): Promise<HelplineEntity> {
  return await this.userRepository.save(modetracker);
}

async update(modetracker: HelplineEntity): Promise<UpdateResult> {
  return await this.userRepository.update(String(modetracker.id),modetracker);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}
}
