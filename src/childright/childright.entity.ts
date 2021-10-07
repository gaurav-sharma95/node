

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity('childright')
export class ChildrightEntity {

    @PrimaryGeneratedColumn()
    id: bigint;
    @Column()
    country:string;
    @Column()
    description:string;
   
}
