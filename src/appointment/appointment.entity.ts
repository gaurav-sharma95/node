import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity('appointment')
export class AppointmentEntity {
    @PrimaryGeneratedColumn()
    id: bigint;
    @Column()
    name:string;
    @Column()
    date:string;
    @Column()
    country:string;
    @Column()
    message:string;
}
