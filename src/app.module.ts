import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { QuotesModule } from './quotes/quotes.module';
import { AccountsModule } from './accounts/accounts.module';
import { SuppliersAccountsModule } from './suppliers_accounts/suppliers_accounts.module';
import { AdminsModule } from './admins/admins.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [ ProductsModule,MongooseModule.forRoot(
    'mongodb+srv://user321:ABCD@cluster0.myov3qt.mongodb.net/sparkle?retryWrites=true&w=majority'), OrdersModule, QuotesModule, AccountsModule, SuppliersAccountsModule, AdminsModule, ReviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
