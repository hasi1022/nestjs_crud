import { Entity,CreateDateColumn,PrimaryGeneratedColumn, Column, UpdateDateColumn, DeleteDateColumn } from "typeorm";
import { OperationEnum } from "./enum/opration.enum";

@Entity('opration')
export class Operation{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    name:string

    @Column({
        type:'enum',
        enum:OperationEnum,
        default:OperationEnum.INACTIVE
    })
    status:OperationEnum

    @CreateDateColumn()
    createdAt:Date;

    @UpdateDateColumn()
    updatedAt:Date;

    @DeleteDateColumn()
    deletedAt:Date;
}