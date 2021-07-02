import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Profile{

    @PrimaryGeneratedColumn("uuid")
    id : string

    @Column()
    imageUrl : string

    @OneToOne(()=> User, user=>user.id, {eager: true})
    user : User

}
