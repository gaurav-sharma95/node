import { Language } from './language.entity';
import { LanguageService } from './language.service';
import 'dotenv/config';
export declare class LanguageController {
    private appService;
    constructor(appService: LanguageService);
    get(params: any): Promise<Language[]>;
    all(params: any): Promise<Language[]>;
    create(country: Language): Promise<Language>;
    update(country: Language): Promise<import("typeorm").UpdateResult>;
}
