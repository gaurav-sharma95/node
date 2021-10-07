import { Credential } from './credential.entity';
import { CredentialService } from './credential.service';
import 'dotenv/config';
export declare class CredentialController {
    private appService;
    constructor(appService: CredentialService);
    get(category: Credential): Promise<Credential>;
    all(params: any): Promise<Credential[]>;
    create(category: Credential): Promise<Credential>;
    update(category: Credential): Promise<import("typeorm").UpdateResult>;
}
