import { Injectable } from "@nestjs/common";
import { DataSource,Repository } from "typeorm";
import { Role } from "src/utils/role.entity";
import { roleDto } from "./dto/role.dto";
import { SelectQueryBuilder } from "typeorm/browser";

@Injectable()
export class roleRepo extends Repository<Role>{
    constructor(private datasource:DataSource){
        super(Role,datasource.createEntityManager())
    }
    async createRole(data:roleDto){
       const role=this.create(data)
       return await this.save(role)
    }
    async getRole(query:SelectQueryBuilder<Role>):Promise<[Role[],number]>{
        return query.getManyAndCount()
    }
    async updateRole(data:roleDto,id:string){
        if(!data){
            throw new Error('no data found to update')
        }
       return await this.update({id:Number(id)},data)
    }
    async deleteRole(id:string){
       return await this.delete({id:Number(id)})
    }
}