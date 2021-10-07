import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Language } from './language.entity';
export declare class LanguageService {
    private userRepository;
    constructor(userRepository: Repository<Language>);
    getUsers(user: Language): Promise<Language[]>;
    findAll(): Promise<Language[]>;
    create(user: Language): Promise<Language>;
    update(user: Language): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
