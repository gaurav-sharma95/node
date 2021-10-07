import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { Language } from './language.entity';

@Injectable()
export class LanguageService {
  
  constructor(
    @InjectRepository(Language)
    private userRepository: Repository<Language>,
  ) {}

  async getUsers(user: Language): Promise<Language[]> {
    return await this.userRepository.find();
}
async  findAll(): Promise<Language[]> {
  return await this.userRepository.find();
}

async  create(user: Language): Promise<Language> {
  return await this.userRepository.save(user);
}

async update(user: Language): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}