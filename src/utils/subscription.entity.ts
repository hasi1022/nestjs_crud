import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SubscriptionEnum } from "./enum/subscription.enum";

@Entity('subscription_management')
export class Subscription{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    subscriptionName:string;

    @Column()
    subscriptionDescription:string;

    @Column({
        type:'enum',
        enum:SubscriptionEnum,
        default:SubscriptionEnum.PENDING
    })
    status:SubscriptionEnum

    @CreateDateColumn()
    createdAt:Date
    
    @UpdateDateColumn()
    updatedAt:Date


}