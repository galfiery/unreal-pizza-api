import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemRepository: Repository<Item>) {
  }

  findAll(): Promise<Item[]> {
    return this.itemRepository.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.itemRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }

  async findByCategoryType(category_type: string): Promise<Item[]> {
    return this.itemRepository
      .createQueryBuilder('item')
      .where('item.category_type = :category_type', { category_type })
      .getMany();
  }
}