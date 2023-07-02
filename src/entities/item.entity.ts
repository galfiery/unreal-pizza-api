import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('item')
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'category_type', nullable: true })
  categoryType: string;

  @Column()
  price: number;

  @Column()
  currency: string;

  @Column({ name: 'image_src', nullable: true })
  imageSrc: string;

  @Column()
  promotion: string;
}
