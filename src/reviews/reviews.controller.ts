import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(private readonly service:ReviewsService){}
    @Post()
    async postNewAccount(
     @Body('text')text: string
     ) {
         const generatedID= await this.service.insertAccount(text)
         return {id : generatedID}
    }
    @Get()
    async getAllAccounts(){
     const acc= await this.service.getReviews();
     return acc
    }
}
