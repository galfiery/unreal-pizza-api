import { Module } from '@nestjs/common';
import { ItemService } from '../services/item.service';
import { Item } from '../entities/item.entity';
import { ItemController } from '../controllers/item/item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  controllers: [ItemController],
  providers: [ItemService],
  exports: [ItemService]
})
export class ItemModule {}
