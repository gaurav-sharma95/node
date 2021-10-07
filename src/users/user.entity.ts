import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  name: string;
  @Column()
  gender: string;
  @Column()
  age: string;
  @Column()
  place: string;
  @Column()
  language: string;
}
