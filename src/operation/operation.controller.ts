import { Controller,Post ,Body, Get, Param, Query, Put, Delete} from '@nestjs/common';
import { OperationService } from './operation.service';
import { operationDto } from './dto/operation.dto';

@Controller('operation')
export class OperationController {
    constructor(private service:OperationService){}
    @Post()
    create(@Body()data:operationDto){
         return this.service.create(data);
    }
    @Get()
    getOperation(@Query('page')page:string,@Query('limit')limit:string,@Query('search')search:string,@Query('order')order:string,@Query('status')status:string){
         return this.service.get(Number(page),Number(limit),search,order,status)
    }
    @Put(':id')
    update(@Body()data:operationDto,@Param('id')id:string){
        return this.service.update(data,Number(id))
    }
    @Delete(':id')
    delete(@Param('id')id:string){
        return this.service.delete(Number(id))
    }
    @Get(':id')
    getId(@Param('id')id:string){
       return this.service.getId(Number(id))
    }
}
