import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class BlogService {


      
  constructor(
    @InjectRepository(BlogEntity)
    private userRepository: Repository<BlogEntity>,
  ) {}

  async getUsers(user: BlogEntity): Promise<BlogEntity[]> {
    return await this.userRepository.find();
}
async  findAll(): Promise<BlogEntity[]> {
  return await this.userRepository.find();
}

async  create(user: BlogEntity): Promise<BlogEntity> {
  return await this.userRepository.save(user);
}

// async update(user: BlogEntity): Promise<BlogEntity> {
//   return await this.userRepository.update(String(user.id),user);
// }

async delete(id): Promise<DeleteResult> {
  return await this.userRepository.delete(id);
}

  
}
