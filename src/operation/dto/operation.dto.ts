import { IsEnum, IsNotEmpty,IsString,MinLength } from "class-validator";
import { Transform } from "class-transformer";
import { OperationEnum } from "src/utils/enum/opration.enum";

export class operationDto{

    @IsNotEmpty({message:'name should not be empty'})
       @IsString({message:'name should be string'})
       @MinLength(2,{message:'atleast length should be 2 '})
       @Transform(({value})=>value.trim())
       name:string
   
       @IsNotEmpty({message:'status is required'})
       @IsEnum(OperationEnum,{message:'invalid status code'})
       status:OperationEnum

}