import {
  Controller,
  Inject,
  UseGuards,
  Get,
  Post,
  Body,
  Req,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GenericResponseDto } from 'src/dto/generic-response.dto';
import { SaveOrderDto } from 'src/dto/save-order.dto';
import { Order } from 'src/entities/order.entity';
import { OrderService } from 'src/services/order.service';

@Controller('order')
export class OrderController {
  constructor(@Inject(OrderService) private orderService: OrderService) {}

  @Get('get-by-user')
  @UseGuards(AuthGuard('jwt'))
  async findAll(@Req() request: any): Promise<Order[]> {
    if (request?.user?.id)
      return await this.orderService.findByUserId(request.user.id);
    else return [];
  }

  @Post('save')
  @UseGuards(AuthGuard('jwt'))
  async save(
    @Req() request,
    @Body() payload: SaveOrderDto,
  ): Promise<GenericResponseDto> {
    return new GenericResponseDto();
  }
}
