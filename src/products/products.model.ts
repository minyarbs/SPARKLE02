import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
    {
        theme_name:{type : String, required: true},
        party_type:{type : String, required: true},
        cost:{type : Number, required: true}

    }
)

export interface Product {
   

        id:String;
        theme_name:string;
        party_type:string;
        cost:number;
}
