import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';


@Controller('products')
export class ProductsController {
  constructor(private readonly prodserv:ProductsService){}
  @Post()
  async addProduct(@Body('theme_name') theme_name:string,@Body('cost') cost:number,@Body('party_type') party_type:string) {
    const generatedID= await this.prodserv.insertProduct(theme_name,party_type,cost);
    return{id : generatedID}
  }

  @Get()
  async getallProducts() {
    const products= await this.prodserv.getproducts();
    return products;
  }
  @Get(':party_type')
  async getProducts(@Param('party_type') party_type:string) {
    const products= await this.prodserv.getEvents(party_type);
    return products;
  }
  @Delete(':id')
  async deleteTheme(@Param('id')id: string,){
    await this.prodserv.deleteProd(id)
  }


}
