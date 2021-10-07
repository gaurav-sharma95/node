import { Json } from 'src/json.dto';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUsers(user: User): Promise<User[]>;
    findAll(): Promise<User[]>;
    getCOuntryWise(user: Json): Promise<User[]>;
    create(user: User): Promise<User>;
    update(user: User): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
