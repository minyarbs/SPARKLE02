import * as mongoose from 'mongoose';

export const OrdersSchema = new mongoose.Schema(
    {
        order_Date:{type : String, required: true},
        party_type:{type : String, required: true},
        party_theme:{type : String, required: true},
        paiement_method:{type : String, required: true},
        paid:{type:Boolean,required:true},
        flower_order:{type : String, required: true},
        deco_order:{type : String, required: true},
        cake_order:{type : String, required: true},
        balloons_order:{type : String, required: true},
        snacks_order:{type : String, required: true},
        order_status:{type : String, required: true}
    }
)

export interface Order {
    id:string,
    order_Date: string,
        party_type: String,
        party_theme : String,
        paiement_method: String, 
        paid:Boolean,
        flower_order:String, 
        deco_order:String, 
        cake_order:String, 
        balloons_order:String, 
        snacks_order:String, 
        order_status:String, 

        
}
