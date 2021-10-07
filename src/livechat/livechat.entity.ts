import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('livechat')
export class LivechatEntity {
    @PrimaryGeneratedColumn()
  id: bigint;
  @Column()
  name:string;
  @Column()
  date:string;
  @Column()
  country:string;
  @Column()
  message:string;
}
