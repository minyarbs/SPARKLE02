import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrdersController } from './orders.controller';
import { OrdersSchema } from './orders.model';
import { OrdersService } from './orders.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'orders', schema:OrdersSchema }])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
