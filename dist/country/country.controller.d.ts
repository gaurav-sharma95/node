import { Country } from './country.entity';
import { CountryService } from './country.service';
import 'dotenv/config';
export declare class CountryController {
    private appService;
    constructor(appService: CountryService);
    get(params: any): Promise<Country[]>;
    all(params: any): Promise<Country[]>;
    create(country: Country): Promise<Country>;
    update(country: Country): Promise<import("typeorm").UpdateResult>;
}
