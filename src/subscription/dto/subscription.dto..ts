import { IsEnum, IsNotEmpty,IsString, MinLength} from "class-validator";
import { SubscriptionEnum } from "src/utils/enum/subscription.enum";
import { Transform } from "class-transformer";

export class subscriptionDto{
    @IsNotEmpty({message:'subscription name should not be empty'})
    @IsString({message:'subscription name should be string'})
    @MinLength(2,{message:'minimum length of subscription name should be 2'})
    @Transform(({value})=>value.trim())
    subscriptionName:string

    @IsNotEmpty({message:'subscription description should not be empty'})
     @IsString({message:'subscription description should be string'})
    @MinLength(2,{message:'minimum length of description should be 2'})
    @Transform(({value})=>value.trim())
    subscriptionDescription:string

    @IsNotEmpty({message:'status is required'})
    @IsEnum(SubscriptionEnum,{message:'Invalid Enum'})
    status:SubscriptionEnum
}