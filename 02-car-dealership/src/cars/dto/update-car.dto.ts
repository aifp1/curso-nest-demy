import { IsOptional, IsString, IsUUID } from "class-validator";

//los dtos ayudan las validaciones de la data y las interfaces no
export class UpdateCarDTO{

    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString()
    @IsOptional()
    readonly brand?: string;
    
    @IsString()
    @IsOptional()
    readonly model?: string;
}