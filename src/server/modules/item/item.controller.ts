import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';
import { UpdateItemDto } from './update-item.dto';
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from "@nestjs/common";

@Controller('item')
export class ItemController {
    constructor(private readonly ItemService: ItemService) { }
    @Post()
    async createItem(@Res() response, @Body() createItemDto: ItemDTO) {
        try {
            const newItem = await this.ItemService.createItem(createItemDto);
            return response.status(HttpStatus.CREATED).json({
                message: 'Item has been created successfully',
                newItem,
            });
        } catch (err) {
            return response.status(HttpStatus.BAD_REQUEST).json({
                statusCode: 400,
                message: 'Error: Item not created!',
                error: 'Bad Request'
            });
        }
    }
    @Put('/:id')
    async updateItem(@Res() response, @Param('id') ItemId: string,
        @Body() updateItemDto: UpdateItemDto) {
        try {
            const existingItem = await this.ItemService.updateItem(ItemId, updateItemDto);

            return response.status(HttpStatus.OK).json({
                message: 'Item has been successfully updated',
                existingItem,
            });
        } catch (err) {

            return response.status(err.status).json(err.response);
        }
    }
    @Post('all')
    async getItems(@Res() response) {
        try {
            const Items = await this.ItemService.getAllItems();
            return response.status(HttpStatus.OK).json({
                message: 'All Items data found successfully', Items,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Post('/cat/:id')
    async getitemByCat(@Res() response, @Param('id') CatId: string) {
        try {
            const Items = await
                this.ItemService.getItemByCat(CatId);
            return response.status(HttpStatus.OK).json({
                message: 'Items found successfully', Items,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Post('/:id')
    async getItem(@Res() response, @Param('id') ItemId: string) {
        try {
            const existingItem = await
                this.ItemService.getItem(ItemId);
            return response.status(HttpStatus.OK).json({
                message: 'Item found successfully', existingItem,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    @Delete('/:id')
    async deleteItem(@Res() response, @Param('id') ItemId: string) {
        try {
            const deletedItem = await this.ItemService.deleteItem(ItemId);
            return response.status(HttpStatus.OK).json({
                message: 'Item deleted successfully',
                deletedItem,
            });
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}