import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Country } from './country.entity';
export declare class CountryService {
    private userRepository;
    constructor(userRepository: Repository<Country>);
    getUsers(user: Country): Promise<Country[]>;
    findAll(): Promise<Country[]>;
    create(user: Country): Promise<Country>;
    update(user: Country): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
