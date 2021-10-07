import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { Counselling } from './counselling.entity';

@Injectable()
export class CounsellingService {
  
  constructor(
    @InjectRepository(Counselling)
    private userRepository: Repository<Counselling>,
  ) {}

  async getUsers(user: Counselling): Promise<Counselling> {
    return await this.userRepository.findOne(user);
}
async  findAll(): Promise<Counselling[]> {
  return await this.userRepository.find();
}

async  create(user: Counselling): Promise<Counselling> {
  return await this.userRepository.save(user);
}

async update(user: Counselling): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}