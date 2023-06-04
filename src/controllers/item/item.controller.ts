/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param } from '@nestjs/common';
import { Item } from '../../entities/item.entity';
import { ItemService } from '../../services/item.service';

@Controller('item')
export class ItemController {

    constructor(@Inject(ItemService) private itemService: ItemService) {

    }

    @Get()
    async findAll(): Promise<Item []> {
        const list: Item [] = await this.itemService.findAll();
        return list;
    }

    @Get('get-by-category-type/:categoryType')
    async findByCategoryType(@Param('categoryType') categoryType: string): Promise<Item []> {
        const list: Item [] = await this.itemService.findByCategoryType(categoryType);
        return list;
    }
}
