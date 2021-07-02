import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import { Profile } from "./Profile";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    age: number;
    
    @OneToOne(()=>Profile, profile=>profile.id,{eager: true, nullable: true, cascade: true})
    @JoinColumn()
    profile : Profile
}
