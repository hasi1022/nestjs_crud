import { BadRequestException, Injectable } from '@nestjs/common';
import { roleRepo } from './role.repository';
import { roleDto } from './dto/role.dto';
import { instanceToPlain } from 'class-transformer';


@Injectable()
export class RoleService {
  constructor(private repo:roleRepo){}
  async create(data:roleDto){
    if(!data){
        throw new BadRequestException('no data found please provide data')
    }
    return this.repo.createRole(data)
  }
  async get(){
     const roles= await this.repo.getRole()
     return  roles.map(r=>instanceToPlain({...r,statusText:r.statusText}))
  }
  async update(){
    
  }
}
