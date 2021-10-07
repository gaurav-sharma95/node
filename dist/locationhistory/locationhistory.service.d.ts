import { Repository } from 'typeorm';
import { LocationhistoryEntity } from './locationhistory.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class LocationhistoryService {
    private userRepository;
    constructor(userRepository: Repository<LocationhistoryEntity>);
    getUsers(modetracker: LocationhistoryEntity): Promise<LocationhistoryEntity[]>;
    create(modetracker: LocationhistoryEntity): Promise<LocationhistoryEntity>;
    update(modetracker: LocationhistoryEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
