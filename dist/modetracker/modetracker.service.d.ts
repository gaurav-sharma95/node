import { Repository } from 'typeorm';
import { ModetrackerEntity } from './modetracker.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class ModetrackerService {
    private userRepository;
    constructor(userRepository: Repository<ModetrackerEntity>);
    getUsers(modetracker: ModetrackerEntity): Promise<ModetrackerEntity[]>;
    create(modetracker: ModetrackerEntity): Promise<ModetrackerEntity>;
    update(modetracker: ModetrackerEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
