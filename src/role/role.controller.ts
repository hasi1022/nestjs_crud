import { Controller,Post,Body,Get, Put, Param,Delete, Query } from '@nestjs/common';
import { RoleService } from './role.service';
import { roleDto } from './dto/role.dto';
@Controller('role')
export class RoleController {
  constructor(private roleservice:RoleService){}
  @Post('create')
  create(@Body()data:roleDto){
       return this.roleservice.create(data);
  }
  @Get('display')
  
  get(@Query('page')page:String,@Query('limit')limit:String,@Query('search')search:string,@Query('order')order:string,@Query('status')status:string){

    return this.roleservice.getRole(Number(page),Number(limit),search,order,Number(status))
  }
  @Get('display/:id')
  getId(@Param('id')id:string){
  return this.roleservice.getRoleId(id)
  }
  @Put('update/:id')
  update(@Body()data:roleDto,@Param('id')id:string){
    return this.roleservice.update(data,id);
  }
  @Delete('delete/:id')
  delete(@Param('id')id:string){
    return this.roleservice.delete(id)
  }
  
}
