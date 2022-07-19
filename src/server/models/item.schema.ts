import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Type } from 'class-transformer';
import { Category } from "./category.schema";


export type ItemDocument = Item & Document;

@Schema()
export class Item {

    @Prop()
    name: string;

    @Prop()
    price: string;

    @Prop()
    description: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
    @Type(() => Category)
    category: Category;
}

export const ItemSchema = SchemaFactory.createForClass(Item);