import { User } from './../../models/user.schema';
import { Item } from './../../models/item.schema';
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";


export class CategoryDTO {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    name: string;

    items: Item[];
    user: User;
}