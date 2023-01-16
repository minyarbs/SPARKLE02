import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuotesController } from './quotes.controller';
import { QuotesSchema } from './quotes.model';
import { QuotesService } from './quotes.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'citation', schema:QuotesSchema }])],
  controllers: [QuotesController],
  providers: [QuotesService]
})
export class QuotesModule {}

