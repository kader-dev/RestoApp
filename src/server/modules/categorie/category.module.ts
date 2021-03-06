import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategorySchema } from '~server/models/category.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }]),

    ],
    providers: [CategoryService],
    controllers: [CategoryController],
    exports: [],

})
export class CategoryModule { }