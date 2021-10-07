import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Counselling } from './counselling.entity';
export declare class CounsellingService {
    private userRepository;
    constructor(userRepository: Repository<Counselling>);
    getUsers(user: Counselling): Promise<Counselling>;
    findAll(): Promise<Counselling[]>;
    create(user: Counselling): Promise<Counselling>;
    update(user: Counselling): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
