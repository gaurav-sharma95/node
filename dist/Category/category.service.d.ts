import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Category } from './category.entity';
export declare class CategoryService {
    private userRepository;
    constructor(userRepository: Repository<Category>);
    getUsers(user: Category): Promise<Category[]>;
    findAll(): Promise<Category[]>;
    create(user: Category): Promise<Category>;
    update(user: Category): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
