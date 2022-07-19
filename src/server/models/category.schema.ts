import { User } from './user.schema';
import { Item } from './item.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import * as mongoose from 'mongoose';


export type CategoryDocument = Category & Document;

@Schema()
export class Category {

    @Prop()
    name: string;
    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: "items" }],
    })
    @Type(() => Item)
    Items: Item[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
    @Type(() => User)
    user: User;
}

export const CategorySchema = SchemaFactory.createForClass(Category);