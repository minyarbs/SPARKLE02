import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminsController } from './admins.controller';
import { AdminsSchema } from './admins.model';
import { AdminsService } from './admins.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'admins',schema:AdminsSchema}])],
  controllers: [AdminsController],
  providers: [AdminsService]
})
export class AdminsModule {}
