import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomInt } from 'crypto';
import { QuotesService } from './quotes.service';


@Controller('quotes')
export class QuotesController {
    constructor(private readonly ser:QuotesService){}
   @Post()
    async postQuote(@Body('text') text:string){
        const generatedID= await this.ser.insertQuote(text)
      return generatedID ;
    }
    @Get()
    async getQuotes(){
        const quotes =await this.ser.getQuote();
        const i =randomInt(quotes.length)
      return quotes[i].text ;
    }
}
