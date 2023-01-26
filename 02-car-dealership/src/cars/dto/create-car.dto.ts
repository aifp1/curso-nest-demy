import { IsString } from "class-validator";

//los dtos ayudan las validaciones de la data y las interfaces no
export class CreateCarDTO{
    
    @IsString()
    readonly brand: string;
    
    @IsString()
    readonly model: string;
}