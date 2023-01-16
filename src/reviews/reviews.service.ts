import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './reviews.model';

@Injectable()
export class ReviewsService {
    constructor(@InjectModel('reviews') private ReviewsModel :Model<Review>){}
    async insertAccount(
        text: String){
    const newaccount= new this.ReviewsModel({text});
     const result = await newaccount.save();
    return result.id
}
async getReviews(){
    const sup =await this.ReviewsModel.find().exec();
    return sup as Review[];
}
}
