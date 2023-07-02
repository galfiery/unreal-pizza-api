import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from 'src/entities/order.entity';
import { SaveOrderDto } from 'src/dto/save-order.dto';
import { GenericResponseDto } from 'src/dto/generic-response.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
  ) {}

  findByUserId(userId: number): Promise<Order[]> {
    return this.orderRepository.findBy({ userId });
  }

  save(userId: number, payload: SaveOrderDto): GenericResponseDto {
    if (!userId)
      return new GenericResponseDto({
        success: false,
        error: 'User id not found',
      });
    return new GenericResponseDto();
  }
}
