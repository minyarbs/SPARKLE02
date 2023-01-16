import * as mongoose from 'mongoose';

export const AccountsSchema = new mongoose.Schema(
    {
        username:{type : String, required: true},
        password:{type : String, required: true},
        firstname:{type : String, required: true},
        lastname:{type:String,required:true}

    }
)

export interface Account {
    id: string
    username: String,
    password:String,
    firstname: String,
    lastname:string
}
