import { Injectable } from "@nestjs/common";
import { DataSource,Repository } from "typeorm";
import { Operation } from "src/utils/opration.entity";
import { SelectQueryBuilder } from "typeorm";
import { operationDto } from "./dto/operation.dto";

@Injectable()
export class operationRepo extends Repository<Operation>{
    constructor(private datasource:DataSource){
        super(Operation,datasource.createEntityManager())
    }
    async createOperation(data:operationDto){
       const operation=this.create(data)
       return await this.save(operation)
    }
    async getOperation(query:SelectQueryBuilder<Operation>){
       return await query.getManyAndCount()
    }
    async updateOperation(data:operationDto,id:number){
       return await this.update({id:Number(id)},data)
    }
    async deleteOperation(id:number){
    return await this.softDelete({id:id})
    }
    async getOperationId(id:number){
     return await this.findOneBy({id:id})
    }
}