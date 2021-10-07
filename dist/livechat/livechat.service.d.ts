import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { LivechatEntity } from './livechat.entity';
export declare class LivechatService {
    private userRepository;
    constructor(userRepository: Repository<LivechatEntity>);
    getUsers(livechat: LivechatEntity): Promise<LivechatEntity[]>;
    create(modetracker: LivechatEntity): Promise<LivechatEntity>;
    update(modetracker: LivechatEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
