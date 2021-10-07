import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UpdateResult, DeleteResult } from  'typeorm';

import { LivechatEntity } from './livechat.entity';
import { LivechatModule } from './livechat.module';
@Injectable()
export class LivechatService {
    constructor(
        @InjectRepository(LivechatEntity)
        private userRepository: Repository<LivechatEntity>,
      ) {}
      async getUsers(livechat: LivechatEntity): Promise<LivechatEntity[]> {
        return await this.userRepository.find();
    }
    
async  create(modetracker: LivechatEntity): Promise<LivechatEntity> {
    return await this.userRepository.save(modetracker);
  }
  
  async update(modetracker: LivechatEntity): Promise<UpdateResult> {
    return await this.userRepository.update(String(modetracker.id),modetracker);
  }
  
  async delete(id): Promise<DeleteResult> {
    return await this.userRepository.delete(id);
  }
}
