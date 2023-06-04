/* eslint-disable prettier/prettier */
import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { Item } from '../../entities/item.entity';
import { ItemService } from '../../services/item.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('item')
export class ItemController {

    constructor(@Inject(ItemService) private itemService: ItemService) {

    }

    @Get()
    @UseGuards(AuthGuard('jwt'))
    async findAll(): Promise<Item []> {
        const list: Item [] = await this.itemService.findAll();
        return list;
    }

    @Get('get-by-category-type/:categoryType')
    @UseGuards(AuthGuard('jwt'))
    async findByCategoryType(@Param('categoryType') categoryType: string): Promise<Item []> {
        const list: Item [] = await this.itemService.findByCategoryType(categoryType);
        return list;
    }
}
