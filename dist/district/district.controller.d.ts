import { District } from './district.entity';
import { DistrictService } from './district.service';
import 'dotenv/config';
export declare class DistrictController {
    private appService;
    constructor(appService: DistrictService);
    get(params: any): Promise<District>;
    all(): Promise<District[]>;
    allData(): Promise<District[]>;
    create(country: District): Promise<District>;
    update(country: District): Promise<import("typeorm").UpdateResult>;
}
