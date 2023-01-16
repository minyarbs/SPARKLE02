import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './orders.model';

@Injectable()
export class OrdersService {
    Oreders: Order[]=[];

    constructor(@InjectModel('orders') private productModel : Model<Order>){}

    async insertOrder(
        order_Date: string,
        party_type: String,
        party_theme : String,
        paiement_method: String, 
        paid:Boolean,
        flower_order:String, 
        deco_order:String, 
        cake_order:String, 
        balloons_order:String, 
        snacks_order:String, 
        order_status:String, ){
const neworder= new this.productModel({order_Date,
    party_type,
    party_theme,
    paiement_method, 
    paid,
    flower_order, 
    deco_order, 
    cake_order, 
    balloons_order, 
    snacks_order, 
    order_status, });
 const result = await neworder.save();
return result.id;
    }

    async getorders(){
        const orders =await this.productModel.find().exec();
        return orders as Order[];
    }

    async getorderByStatus(status:string){
        const orders = await this.productModel.find({order_status: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async getorderflowers(status:string){
        const orders = await this.productModel.find({flower_order: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async getorderballoons(status:string){
        const orders = await this.productModel.find({balloons_order: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async getordercake(status:string){
        const orders = await this.productModel.find({cake_order: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async getordersnacks(status:string){
        const orders = await this.productModel.find({snacks_order: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async getorderdeco(status:string){
        const orders = await this.productModel.find({deco_order: status})
        if(!orders){
            throw new NotFoundException('could not find product')
        }
        return orders
    }
    async update(id: string, postData: Order) {
        const post = await this.productModel
          .findByIdAndUpdate(id, postData)
          .setOptions({ overwrite: true, new: true })
          
        if (!post) {
          throw new NotFoundException();
        }
        return post;
      }
}
