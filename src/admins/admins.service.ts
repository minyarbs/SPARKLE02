import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Admins } from './admins.model';

@Injectable()
export class AdminsService {
    constructor(@InjectModel('admins') private AdminModel : Model<Admins>){}

    async insertAccount(
            username: String,
            password:String
            ){
        const newaccount= new this.AdminModel({username,password});
         const result = await newaccount.save();
        return result.id
    }
    async getAdmins(){
        const sup =await this.AdminModel.find().exec();
        return sup as Admins[];
    }
    async connect(username:string,password:string){
        const sup =await this.AdminModel.find({username,password});
        if (sup ==null)  
          return false
        else return true
    }
    async deleteAccount(id:string){
        await this.AdminModel.deleteOne({ "_id" : id });
    }
}
