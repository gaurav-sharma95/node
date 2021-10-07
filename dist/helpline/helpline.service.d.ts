import { HelplineEntity } from './helpline.entity';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Repository } from 'typeorm';
export declare class HelplineService {
    private userRepository;
    constructor(userRepository: Repository<HelplineEntity>);
    getUsers(modetracker: HelplineEntity): Promise<HelplineEntity[]>;
    create(modetracker: HelplineEntity): Promise<HelplineEntity>;
    update(modetracker: HelplineEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
