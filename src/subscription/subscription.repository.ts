import { Subscription } from "src/utils/subscription.entity";
import { BadRequestException, Injectable } from "@nestjs/common";
import { Repository, SelectQueryBuilder } from "typeorm";
import { DataSource } from "typeorm";
import { subscriptionDto } from "./dto/subscription.dto.";

@Injectable()
export class subscriptionRepo extends Repository<Subscription>{
    constructor(private datasource:DataSource){
        super(Subscription,datasource.createEntityManager())
    }
    async createSubscription(data:subscriptionDto){
        const subscription=this.create(data)
        return this.save(subscription)
    }
    async getSubscription(query:SelectQueryBuilder<Subscription>):Promise<[Subscription[],number]>{
        return query.getManyAndCount()

    }
    async updateSubscription(data:subscriptionDto,id:string){
        if(!data){
            throw new BadRequestException('No data found')
        }
        return this.update({id:Number(id)},data)
    }
    async deleteSubscription(id:string){
       return this.delete({id:Number(id)})
    }
}