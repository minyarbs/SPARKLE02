import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import{ InjectModel} from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    products: Product[]=[];

    constructor(@InjectModel('events') private productModel : Model<Product>){}

    async insertProduct(theme_name: string, party_type:string,cost: Number){
const newproduct= new this.productModel({theme_name ,party_type, cost});
 const result = await newproduct.save();
return result.id;
    }

    async getproducts(){
        const products =await this.productModel.find().exec();
        return products as Product[];
    }

    async getEvents(party_type:string){
        const products = await this.productModel.find({party_type: party_type})
        if(!products){
            throw new NotFoundException('could not find product')
        }
        return products
    }

    async deleteProd(id:string){
        await this.productModel.deleteOne({'_id':id});
    }
}
