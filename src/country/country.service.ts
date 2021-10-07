import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { Country } from './country.entity';

@Injectable()
export class CountryService {
  
  constructor(
    @InjectRepository(Country)
    private userRepository: Repository<Country>,
  ) {}

  async getUsers(user: Country): Promise<Country[]> {
    return await this.userRepository.find();
}
async  findAll(): Promise<Country[]> {
  return await this.userRepository.find();
}

async  create(user: Country): Promise<Country> {
  return await this.userRepository.save(user);
}

async update(user: Country): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}