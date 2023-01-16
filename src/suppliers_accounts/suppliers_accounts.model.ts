import * as mongoose from 'mongoose';

export const SupAccountsSchema = new mongoose.Schema(
    {
        username:{type : String, required: true},
        password:{type : String, required: true},
        role:{type : String, required: true}

    }
)

export interface SupAccount {
    id: string
    username: String,
    password:String,
    role: String
}
