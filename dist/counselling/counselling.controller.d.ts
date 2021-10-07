import { Counselling } from './counselling.entity';
import { CounsellingService } from './counselling.service';
import 'dotenv/config';
export declare class CounsellingController {
    private appService;
    constructor(appService: CounsellingService);
    get(category: Counselling): Promise<Counselling>;
    all(params: any): Promise<Counselling[]>;
    create(category: Counselling): Promise<Counselling>;
    update(category: Counselling): Promise<import("typeorm").UpdateResult>;
}
