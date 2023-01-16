import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountsController } from './accounts.controller';
import { AccountsSchema } from './accounts.model';
import { AccountsService } from './accounts.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'accounts', schema:AccountsSchema}])],
  controllers: [AccountsController],
  providers: [AccountsService]
})
export class AccountsModule {}
