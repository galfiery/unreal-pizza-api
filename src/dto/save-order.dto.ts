import { Item } from 'src/entities/item.entity';

export class SaveOrderDto {
  id?: number;
  items: Item[];
}
