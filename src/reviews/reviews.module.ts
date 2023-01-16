import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsController } from './reviews.controller';
import { reviewsSchema } from './reviews.model';
import { ReviewsService } from './reviews.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'reviews',schema:reviewsSchema}])],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
