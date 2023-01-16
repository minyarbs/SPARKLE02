import * as mongoose from 'mongoose';

export const reviewsSchema = new mongoose.Schema(
    {
        text:{type : String, required: true},
    }
)

export interface Review {
    id: string
    text: String
}
