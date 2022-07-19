import { UpdateItemDto } from './update-item.dto';
import { Item } from './../../../shared/types/item';
import { ItemDTO } from './item.dto';
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ItemService {
    constructor(@InjectModel('Item') private ItemModel: Model<Item>) { }
    async createItem(createItemDto: ItemDTO): Promise<Item> {
        const newItem = await new this.ItemModel(createItemDto);
        return newItem.save();
    }
    async updateItem(ItemId: string, updateItemDto: UpdateItemDto): Promise<Item> {
        const existingItem = await this.ItemModel.findByIdAndUpdate(ItemId, updateItemDto, { new: true });
        if (!existingItem) {
            throw new NotFoundException(`Item #${ItemId} not found`);
        }
        return existingItem;
    }
    async getAllItems(): Promise<Item[]> {
        const Items = await this.ItemModel.find().populate('category');
        if (!Items || Items.length == 0) {
            throw new NotFoundException('Item data not found!');
        }
        return Items;
    }
    async getItemByCat(CatId: string): Promise<Item[]> {
        const existingItems = await (await this.ItemModel.find({ category: CatId }).exec());
        if (!existingItems) {
            throw new NotFoundException(`Category #${CatId} not found`);
        }
        return existingItems;
    }
    async getItem(ItemId: string): Promise<Item> {
        const existingItem = await this.ItemModel.findById(ItemId).exec();
        if (!existingItem) {
            throw new NotFoundException(`Item #${ItemId} not found`);
        }
        return existingItem;
    }
    async deleteItem(ItemId: string): Promise<Item> {
        const deletedItem = await this.ItemModel.findByIdAndDelete(ItemId);
        if (!deletedItem) {
            throw new NotFoundException(`Item #${ItemId} not found`);
        }
        return deletedItem;
    }
}