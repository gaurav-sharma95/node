import { ChildrightEntity } from './childright.entity';
import { ChildrightService } from './childright.service';
export declare class ChildrightController {
    private readonly appService;
    constructor(appService: ChildrightService);
    get(params: any): Promise<ChildrightEntity[]>;
    create(modetracker: ChildrightEntity): Promise<ChildrightEntity>;
    update(user: ChildrightEntity): Promise<import("typeorm").UpdateResult>;
}
