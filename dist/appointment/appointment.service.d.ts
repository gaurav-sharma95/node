import { AppointmentEntity } from './appointment.entity';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from 'typeorm';
export declare class AppointmentService {
    private userRepository;
    constructor(userRepository: Repository<AppointmentEntity>);
    getUsers(livechat: AppointmentEntity): Promise<AppointmentEntity[]>;
    create(modetracker: AppointmentEntity): Promise<AppointmentEntity>;
    update(appointment: AppointmentEntity): Promise<UpdateResult>;
    delete(id: any): Promise<DeleteResult>;
}
