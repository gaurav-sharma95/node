import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('locationhistory')
export class LocationhistoryEntity {

    @PrimaryGeneratedColumn()
    id: bigint;
    @Column()
    country:string;
    @Column()
    userid:string;
    @Column()
    latitude:string;

    @Column()
    longitude:string;
}
