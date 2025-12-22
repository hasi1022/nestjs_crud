import { IsNotEmpty,IsString,IsEnum } from "class-validator";
import { status } from "src/utils/enum/status.enum";
export class roleDto{

    @IsNotEmpty()
    @IsString()
    role:string

    @IsNotEmpty()
    @IsEnum(status)
    status:status 
}