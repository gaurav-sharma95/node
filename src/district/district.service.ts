import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { District } from './district.entity';

@Injectable()
export class DistrictService {
  
  constructor(
    @InjectRepository(District)
    private userRepository: Repository<District>,
  ) {}

  async getUsers(user: District): Promise<District> {
    return await this.userRepository.findOne(user);
}
async  findAll(): Promise<District[]> {
  return await this.userRepository.find();
}

async  create(user: District): Promise<District> {
  return await this.userRepository.save(user);
}

async update(user: District): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}