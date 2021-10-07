import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('district')
export class District {
  @PrimaryGeneratedColumn()
  id: bigint;
  @Column()
  name: string;
  @Column()
  key: string;
  @Column()
  language: string;
}
