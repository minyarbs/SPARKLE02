import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from './orders.model';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
    constructor(private readonly orderserv:OrdersService){}
  @Post()
  async addProduct(
    @Body('order_Date')order_Date: string,
    @Body('party_type')   party_type: String,
    @Body('party_theme')    party_theme : String,
    @Body('paiement_method')   paiement_method: String, 
    @Body('paid')    paid:Boolean,
    @Body('flower_order')    flower_order:String, 
    @Body('deco_order')    deco_order:String, 
    @Body('cake_order')    cake_order:String, 
    @Body('balloons_order')    balloons_order:String, 
    @Body('snacks_order')   snacks_order:String, 
    @Body('order_status')   order_status:String, 
    ) {
    const generatedID= await this.orderserv.insertOrder(order_Date,party_type,party_theme,paiement_method,paid,flower_order,deco_order,cake_order,balloons_order,snacks_order,order_status);
    return{id : generatedID}
  }

  @Get()
  async getOrders() {
    const orders= await this.orderserv.getorders();
    return orders;
  }
  @Get('order/:order_status')
  async getProducts(@Param('order_status') order_status:string) {
    const orders= await this.orderserv.getorderByStatus(order_status);
    return orders;
  }
  @Get('flower/:flower_order')
  async getflowers(@Param('flower_order') flower_order:string) {
    const orders= await this.orderserv.getorderflowers(flower_order);
    return orders;
  }
  @Get('cake/:cake_order')
  async getcake(@Param('cake_order') cake_order:string) {
    const orders= await this.orderserv.getordercake(cake_order);
    return orders;
  }
  @Get('deco/:deco_order')
  async getdeco(@Param('deco_order') deco_order:string) {
    const orders= await this.orderserv.getorderdeco(deco_order);
    return orders;
  }
  @Get('balloons/:balloons_order')
  async getballoons(@Param('balloons_order') balloons_order:string) {
    const orders= await this.orderserv.getorderballoons(balloons_order);
    return orders;
  }
  @Get('snacks/:snacks_order')
  async getsnacks(@Param('snacks_order') snacks_order:string) {
    const orders= await this.orderserv.getordersnacks(snacks_order);
    return orders;
  }

  @Put(':id')
  async updatePost(@Param('id')id:string , @Body() post: Order) {
    return this.orderserv.update(id, post);
  }
}
