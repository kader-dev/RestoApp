import { Category } from './../../server/models/category.schema';
import { Document } from 'mongoose';

export interface Item extends Document {

    name: string;
    price: string;
    description: string;
    category: Category;

}