import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SuppliersAccountsController } from './suppliers_accounts.controller';
import { SupAccountsSchema } from './suppliers_accounts.model';
import { SuppliersAccountsService } from './suppliers_accounts.service';

@Module({
  imports:[MongooseModule.forFeature([{name:'SupAccounts', schema:SupAccountsSchema }])],
  controllers: [SuppliersAccountsController],
  providers: [SuppliersAccountsService]
})
export class SuppliersAccountsModule {
  
}
