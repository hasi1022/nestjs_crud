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

    get statusText():string{
        switch(this.status){
            case status.PENDING:
                return 'Pending'
            case status.APPROVED:
                return 'Approved'
            case status.REJECTED:
                return 'Rejected'
            default:
                return 'Unknown'
        }
    }

    @CreateDateColumn()
    createdAt:Date

    @UpdateDateColumn()
    updateAt:Date

    @DeleteDateColumn()
    deleteAt:Date


}