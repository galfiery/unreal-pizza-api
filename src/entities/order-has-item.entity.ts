import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_has_item')
export class OrderHasItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'order_id' })
  orderId: number;

  @Column({ name: 'item_id' })
  itemId: number;
}
