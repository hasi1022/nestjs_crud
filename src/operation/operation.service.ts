import { BadRequestException, Injectable } from '@nestjs/common';
import { operationRepo } from './operation.repository';
import { operationDto } from './dto/operation.dto';

@Injectable()
export class OperationService {
   constructor(private repo:operationRepo){}
   async create(data:operationDto){
    if(!data){
        return new BadRequestException('no data found ')
    }
    return this.repo.createOperation(data);
   }
   async get(page:number,limit:number,search?:string,order?:string,status?:string){
    try{
     const skip=(page-1)*limit;
     const query=this.repo.createQueryBuilder('operation')
     const orderSort:'ASC'|'DESC'=order=='A' ? 'ASC' : 'DESC'

     if(search){
        query.where('operation.name ILIKE :search ',{search:`%${search}%`})
     }
     if(status){
        if(search){
            query.andWhere('operation.status = :status ',{status})
        }
        else{
            query.where('operation.status = :status',{status})
        }
     }
     query
          .skip(skip)
          .take(limit)
          .orderBy('operation.createdAt',orderSort)
     return this.repo.getOperation(query)
    }catch(err){
        return new Error(err)
    }
   }
   async update(data:operationDto,id:number){
    return this.repo.updateOperation(data,id);
   }
   async delete(id:number){
    return this.repo.deleteOperation(id)
   }
   async getId(id:number){
    return this.repo.getOperationId(id)
   }
}
