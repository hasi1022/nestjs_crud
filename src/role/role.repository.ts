import { Injectable } from "@nestjs/common";
import { DataSource,Repository } from "typeorm";
import { Role } from "src/utils/role.entity";
import { roleDto } from "./dto/role.dto";

@Injectable()
export class roleRepo extends Repository<Role>{
    constructor(private datasource:DataSource){
        super(Role,datasource.createEntityManager())
    }
    async createRole(data:roleDto){
       const role=this.create(data)
       return await this.save(role)
    }
    async getRole(){

    }
    async updateRole(){

    }
    async deleteRole(){

    }
}