import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('country_master')
export class Country {
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  name: string;
  @Column()
  key: string;
  @Column()
  language: string;
}
