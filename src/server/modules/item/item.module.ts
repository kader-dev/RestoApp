import { ItemController } from './item.controller';
import { ItemService } from './item.service';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from '~server/models/item.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }]),

    ],
    providers: [ItemService],
    controllers: [ItemController],
    exports: [],

})
export class ItemModule { }