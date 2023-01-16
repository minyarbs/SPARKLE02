import * as mongoose from 'mongoose';

export const QuotesSchema = new mongoose.Schema(
    {
        text:{type : String, required: true},
        

    }
)

export interface Quotes {

        id:String;
       text:string;
}
