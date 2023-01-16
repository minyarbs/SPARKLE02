import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './accounts.model';

@Injectable()
export class AccountsService {
    constructor(@InjectModel('accounts') private AccountModel : Model<Account>){}

    async insertAccount(
            username: String,
            password:String,
            firstname: String,
            lastname:string){
        const newaccount= new this.AccountModel({username,password,firstname,lastname});
         const result = await newaccount.save();
        return result.id
    }
    async getAccounts(){
        const sup =await this.AccountModel.find().exec();
        return sup as Account[];
    }
    async connect(username:string,password:string){
        const sup =await this.AccountModel.find({username,password});
        if (sup ==null)  
          return false
        else return true
    }
    async deleteAccount(id:string){
        await this.AccountModel.deleteOne({ "_id" : id });
    }
}
