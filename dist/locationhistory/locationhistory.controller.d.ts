import { LocationhistoryEntity } from './locationhistory.entity';
import { LocationhistoryService } from './locationhistory.service';
export declare class LocationhistoryController {
    private readonly appService;
    constructor(appService: LocationhistoryService);
    get(params: any): Promise<LocationhistoryEntity[]>;
    create(locationhistory: LocationhistoryEntity): Promise<LocationhistoryEntity>;
    update(locationhistory: LocationhistoryEntity): Promise<import("typeorm").UpdateResult>;
}
