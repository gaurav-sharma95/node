import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('language')
export class Language{
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  name: string;
  @Column()
  key: string;
}
