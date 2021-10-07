import { AppointmentEntity } from './appointment.entity';
import { AppointmentService } from './appointment.service';
export declare class AppointmentController {
    private readonly appService;
    constructor(appService: AppointmentService);
    get(params: any): Promise<AppointmentEntity[]>;
    create(modetracker: AppointmentEntity): Promise<AppointmentEntity>;
    update(modetracker: AppointmentEntity): Promise<import("typeorm").UpdateResult>;
}
