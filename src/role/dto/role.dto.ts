import { Transform } from "class-transformer";
import { IsNotEmpty,IsString,IsEnum,MinLength } from "class-validator";
import { status } from "src/utils/enum/status.enum";
export class roleDto{

    @IsNotEmpty({message:'role should not be empty'})
    @IsString({message:'role should be string'})
    @MinLength(2,{message:'atleast length should be 2 '})
    @Transform(({value})=>value.trim())
    role:string

    @IsNotEmpty({message:'status is required'})
    @IsEnum(status,{message:'invalid status code'})
    status:status 

}
