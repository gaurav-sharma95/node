import { Repository } from 'typeorm';
import { ChildrightEntity } from './childright.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ChildrightService {
    private userRepository;
    constructor(userRepository: Repository<ChildrightEntity>);
    getUsers(modetracker: ChildrightEntity): Promise<ChildrightEntity[]>;
    create(modetracker: ChildrightEntity): Promise<ChildrightEntity>;
    update(modetracker: ChildrightEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
