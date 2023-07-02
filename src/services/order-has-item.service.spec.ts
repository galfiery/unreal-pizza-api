import { Test, TestingModule } from '@nestjs/testing';
import { OrderHasItemService } from './order-has-item.service';

describe('OrderHasItemService', () => {
  let service: OrderHasItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderHasItemService],
    }).compile();

    service = module.get<OrderHasItemService>(OrderHasItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
