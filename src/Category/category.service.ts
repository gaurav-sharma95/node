import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  
  constructor(
    @InjectRepository(Category)
    private userRepository: Repository<Category>,
  ) {}

  async getUsers(user: Category): Promise<Category[]> {
    return await this.userRepository.find();
}
async  findAll(): Promise<Category[]> {
  return await this.userRepository.find();
}

async  create(user: Category): Promise<Category> {
  return await this.userRepository.save(user);
}

async update(user: Category): Promise<UpdateResult> {
  return await this.userRepository.update(String(user.id),user);
}

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}