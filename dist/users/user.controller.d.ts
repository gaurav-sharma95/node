import { User } from './user.entity';
import { UserService } from './user.service';
import 'dotenv/config';
import { Json } from 'src/json.dto';
export declare class UserController {
    private appService;
    constructor(appService: UserService);
    get(params: any): Promise<User[]>;
    getCOuntryWise(user: Json): Promise<User[]>;
    create(user: User): Promise<User>;
    update(user: User): Promise<import("typeorm").UpdateResult>;
}
