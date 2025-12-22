import { Controller,Post,Body,Get } from '@nestjs/common';
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
  get(){
    return this.roleservice.get()
  }
}
