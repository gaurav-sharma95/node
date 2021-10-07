import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('category')
export class Category{
  @PrimaryGeneratedColumn()
  id: bigint;
  
  @Column()
  name: string;
}
