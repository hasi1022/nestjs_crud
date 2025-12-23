import { Controller,Post,Get,Put,Delete, Body, Query, Param } from '@nestjs/common';
import { Subscription } from 'src/utils/subscription.entity';
import { SubscriptionService } from './subscription.service';
import { subscriptionDto } from './dto/subscription.dto.';


@Controller('subscription')
export class SubscriptionController {
    constructor(private subscriptionservice:SubscriptionService){}
    @Post()
    create(@Body()data:subscriptionDto){
        return this.subscriptionservice.create(data)
    }
    @Get()
    get(@Query('page')page:string,@Query('limit')limit:string,@Query('search')search:string,@Query('order')order:string,@Query('status')status:string){
        return this.subscriptionservice.get(Number(page),Number(limit),search,order,Number(status))
    }
    @Put(':id')
    update(@Body()data:subscriptionDto,@Param('id')id:string){
      return this.subscriptionservice.update(data,id)
    }
    @Delete(':id')
    delete(@Param('id')id:string){
      return this.subscriptionservice.delete(id)
    }

}
