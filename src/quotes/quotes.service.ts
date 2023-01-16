import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quotes } from './quotes.model';

@Injectable()
export class QuotesService {
  
    constructor(@InjectModel('citation') private QuotesModel : Model<Quotes>){}
   async insertQuote(text:string){
        const newproduct= new this.QuotesModel({text});
         const result = await newproduct.save();
        return result.id;
            }
    async getQuote(){
        const quotes =await this.QuotesModel.find().exec();
        return quotes as Quotes[];
    }

}

