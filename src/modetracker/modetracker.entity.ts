import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('modetracker') 


export class ModetrackerEntity {

    @PrimaryGeneratedColumn()
    id: bigint;

    @Column()
    name:string;
    @Column()
    description:string;
    
}
