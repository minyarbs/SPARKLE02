import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('admins')
export class AdminsController {
    constructor(private readonly ser: AdminsService){}
    @Post('new')
    async postNewAccount(
     @Body('username')username: string,
     @Body('password') password:string
     ) {
         const generatedID= await this.ser.insertAccount(username,password)
         return {id : generatedID}
    }
 
    @Post('Login')
    async login(
     @Body('username')username: string,
     @Body('password') password:string,
    ) {
        if((username!='')&&(password!='')){
     const check =await this.ser.connect(username,password)
     return check}
     else return false
    }
 
    @Get('all')
    async getAllAccounts(){
     const acc= await this.ser.getAdmins();
     return acc
    }
 
    @Delete(':id')
    async deleteAccount(@Param('id')id: string,){
     await this.ser.deleteAccount(id)
    }
}
