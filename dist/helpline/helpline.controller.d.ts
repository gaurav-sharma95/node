import { HelplineEntity } from './helpline.entity';
import { HelplineService } from './helpline.service';
export declare class HelplineController {
    private readonly appService;
    constructor(appService: HelplineService);
    get(params: any): Promise<HelplineEntity[]>;
    create(modetracker: HelplineEntity): Promise<HelplineEntity>;
    update(user: HelplineEntity): Promise<import("typeorm").UpdateResult>;
}
