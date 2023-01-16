import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { AccountsService } from './accounts.service';


@Controller('accounts')
export class AccountsController {
    constructor(private readonly ser: AccountsService){}
    @Post('new')
    async postNewAccount(
     @Body('username')username: string,
     @Body('password') password:string,
     @Body('firstname')firstname: string,
     @Body('lastname')lastname: string,
     ) {
         const generatedID= await this.ser.insertAccount(username,password,firstname,lastname)
         return {id : generatedID}
    }
 
    @Post('Login')
    async login(
     @Body('username')username: string,
     @Body('password') password:string,
    ) {
     const check =await this.ser.connect(username,password)
     return check
    }
 
    @Get('all')
    async getAllAccounts(){
     const acc= await this.ser.getAccounts();
     return acc
    }
 
    @Delete()
    async deleteAccount(@Body('id')id: string,){
     await this.ser.deleteAccount(id)
     return("action completed")
    }
}