import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Country } from 'src/country/country.entity';
import { Json } from 'src/json.dto';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { User } from './user.entity';

@Injectable()
export class UserService {
  
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getUsers(user: User): Promise<User[]> {
    return await this.userRepository.find();
}
async  findAll(): Promise<User[]> {
  return await this.userRepository.find();
}

// getCOuntryWise
async getCOuntryWise(user:Json): Promise<User[]> {
  return await this.userRepository.find({ where: { place: user.name } });
}

async  create(user: User): Promise<User> {
  return await this.userRepository.save(user);
}

async update(user: User): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}