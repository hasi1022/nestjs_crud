import { BadRequestException, Injectable } from '@nestjs/common';
import { subscriptionRepo } from './subscription.repository';
import { subscriptionDto } from './dto/subscription.dto.';
@Injectable()
export class SubscriptionService {
    constructor(private repo:subscriptionRepo){}
    async create(data:subscriptionDto){
       if(!data){
        throw new BadRequestException('no data found')
       }
       return this.repo.createSubscription(data);
    }
    async get(page:number,limit:number,search?:string,order?:string,status?:number){
       const skip=(page-1)*limit;
       const query = this.repo.createQueryBuilder('subscription')
       const orderSort:'ASC'|'DESC'=order=='A' ? 'ASC' : 'DESC'
       if(search){
        query.where('subscription.subscriptionName ILIKE :search',{search:`%${search}%`})
       }

       if(status){
        if(search){
            query.andWhere('subscription.status = :status',{status})
        }
        else{
            query.where('subscription.status = :status',{status})
        }
       }
       query
       .skip(skip)
       .take(limit)
       .orderBy('subscription.createdAt',orderSort)
       return this.repo.getSubscription(query)
    }
    async update(data:subscriptionDto,id:string){
        return this.repo.updateSubscription(data,id)
    }
    async delete(id:string){
        return this.repo.deleteSubscription(id);
    }

}
