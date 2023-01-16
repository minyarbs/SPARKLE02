import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupAccount } from './suppliers_accounts.model';

@Injectable()
export class SuppliersAccountsService {
    constructor(@InjectModel('SupAccounts') private SupAccountsModel : Model<SupAccount>){}

    async insertAccount(
            username: String,
            password:String,
            role: String){
        const newaccount= new this.SupAccountsModel({username,password,role});
         const result = await newaccount.save();
        return result.id
    }
    async getSuppliers(){
        const sup =await this.SupAccountsModel.find().exec();
        return sup as SupAccount[];
    }
    async connect(username:string,password:string){
        const sup =await this.SupAccountsModel.findOne({username,password});
        if(sup)
        {return sup.role}
        else throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    async deleteAccount(id:string){
        await this.SupAccountsModel.deleteOne({ "_id" : id });
    }
}
