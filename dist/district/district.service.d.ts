import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { District } from './district.entity';
export declare class DistrictService {
    private userRepository;
    constructor(userRepository: Repository<District>);
    getUsers(user: District): Promise<District>;
    findAll(): Promise<District[]>;
    create(user: District): Promise<District>;
    update(user: District): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
