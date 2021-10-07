import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('credential')
export class Credential{
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  cid: string;
}
