import { ModetrackerService } from './modetracker.service';
import 'dotenv/config';
import { ModetrackerEntity } from './modetracker.entity';
export declare class ModetrackerController {
    private readonly appService;
    constructor(appService: ModetrackerService);
    get(params: any): Promise<ModetrackerEntity[]>;
    create(modetracker: ModetrackerEntity): Promise<ModetrackerEntity>;
    update(user: ModetrackerEntity): Promise<import("typeorm").UpdateResult>;
}
