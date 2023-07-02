import { Controller, Get, Inject, Param, UseGuards } from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemService } from '../services/item.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('item')
export class ItemController {
  constructor(@Inject(ItemService) private itemService: ItemService) {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAll();
  }

  @Get('get-by-category-type/:categoryType')
  @UseGuards(AuthGuard('jwt'))
  async findByCategoryType(
    @Param('categoryType') categoryType: string,
  ): Promise<Item[]> {
    return await this.itemService.findByCategoryType(categoryType);
  }
}
