import * as mongoose from 'mongoose';

export const AdminsSchema = new mongoose.Schema(
    {
        username:{type : String, required: true},
        password:{type : String, required: true},

    }
)

export interface Admins {
    id: string
    username: String,
    password:String,
}
