import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { Credential } from './credential.entity';

@Injectable()
export class CredentialService {
  
  constructor(
    @InjectRepository(Credential)
    private userRepository: Repository<Credential>,
  ) {}

  async getUsers(user: Credential): Promise<Credential> {
    return await this.userRepository.findOne(user);
}
async  findAll(): Promise<Credential[]> {
  return await this.userRepository.find();
}

async  create(user: Credential): Promise<Credential> {
  return await this.userRepository.save(user);
}

async update(user: Credential): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}