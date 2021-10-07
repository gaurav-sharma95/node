
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';



@Entity('helplinenumber')
export class HelplineEntity {

    @PrimaryGeneratedColumn()
    id: bigint;
    @Column()
    place:string;
    @Column()
    helplinenumber:string;
    @Column()
    category:string;
    @Column()
    subcategory:string;
    @Column()
    name:string;
    @Column()
    hotline:string;
    @Column()
    add1:string;
    @Column()
    add2:string;
    @Column()
    tel1:string;
    @Column()
    tel2:string;
    @Column()
    tel3:string;
    @Column()
    website:string;
    @Column()
    geolocation:string;
    @Column()
    emergency:string;
}
