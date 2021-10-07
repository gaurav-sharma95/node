import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('counselling')
export class Counselling{
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  date: string;
  @Column()
  message: string;
  @Column()
  userid: string;
}
