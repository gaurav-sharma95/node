import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
import { Credential } from './credential.entity';
export declare class CredentialService {
    private userRepository;
    constructor(userRepository: Repository<Credential>);
    getUsers(user: Credential): Promise<Credential>;
    findAll(): Promise<Credential[]>;
    create(user: Credential): Promise<Credential>;
    update(user: Credential): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
