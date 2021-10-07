import { Repository } from 'typeorm';
import { BlogEntity } from './blog.entity';
import { DeleteResult } from 'typeorm';
export declare class BlogService {
    private userRepository;
    constructor(userRepository: Repository<BlogEntity>);
    getUsers(user: BlogEntity): Promise<BlogEntity[]>;
    findAll(): Promise<BlogEntity[]>;
    create(user: BlogEntity): Promise<BlogEntity>;
    delete(id: any): Promise<DeleteResult>;
}
