import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity('blog')
export class BlogEntity {
    @PrimaryGeneratedColumn()
    id: bigint;
    
    @Column()
    title: string;
    @Column()
    subtitle: string;
    @Column()
    heading: string;

    @Column()
    category: string;
    @Column()
    tag: string;
    @Column()
    image: string;
    @Column()
    description: string;

}
