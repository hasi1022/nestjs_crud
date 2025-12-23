import { Entity,Column,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { status } from "./enum/status.enum";
@Entity('role_management')
export class Role{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    role:string

    @Column({
        type:'enum',
        enum:status,
        default:status.PENDING
    })
    status:status

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date

    @DeleteDateColumn()
    deleteAt:Date


}