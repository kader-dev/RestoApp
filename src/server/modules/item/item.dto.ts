import { Category } from './../../models/category.schema';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class ItemDTO {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    name: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    price: string;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    description: string;

    category: Category;
}