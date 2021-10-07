import { LivechatService } from './livechat.service';
import 'dotenv/config';
import { LivechatEntity } from './livechat.entity';
export declare class LivechatController {
    private readonly appService;
    constructor(appService: LivechatService);
    get(params: any): Promise<LivechatEntity[]>;
    create(modetracker: LivechatEntity): Promise<LivechatEntity>;
    update(user: LivechatEntity): Promise<import("typeorm").UpdateResult>;
}
