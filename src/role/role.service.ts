import { BadRequestException, Injectable } from '@nestjs/common';
import { roleRepo } from './role.repository';
import { roleDto } from './dto/role.dto';
import { instanceToPlain } from 'class-transformer';
import { Role } from 'src/utils/role.entity';


@Injectable()
export class RoleService {
  constructor(private repo:roleRepo){}
  async create(data:roleDto){
    if(!data){
        throw new BadRequestException('no data found please provide data')
    }
    return this.repo.createRole(data)
  }
async getRole(page: number,limit: number,search?: string,order?:string,status?:number): Promise<[Role[], number]> {
  const skip = (page - 1) * limit;

  const query = this.repo.createQueryBuilder('role');
  const orderSort:'ASC'|'DESC'=order=='A' ? 'ASC' : 'DESC'

  if (search) {
    query.where('role.role ILIKE :search', {
      search: `%${search}%`,
    });
  }
  if(status){
    if(search){
     query.andWhere('role.status = :status',{status})
    }
    query.where('role.status = :status',{status})
  }

  query
    .skip(skip)
    .take(limit)
    .orderBy('role.createdAt',orderSort)
  return this.repo.getRole(query)
}
  async update(data:roleDto,id:string){
     return this.repo.updateRole(data,id);
  }
  async delete(id:string){
     return this.repo.deleteRole(id)
  }
  async getRoleId(id:string){
    return this.repo.getRoleId(id)
  }
}
