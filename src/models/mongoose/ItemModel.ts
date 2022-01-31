import mongoose, { Schema } from 'mongoose'
// const PromotionsSchema = new Schema(
//     {
//         sku: { type: String, required: true },
//         price: { type: Number, required: true },

//     }
// ) 
const ItemSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        sku: { type: String, required: true },
        type: {type: String, required: true },
        description: { type: String, required: true },
        default_price: { type: Number, required: true },
        tax: { type: Number, required: true },
        count: { type: Number, required: true },
        // promotions: [PromotionsSchema]
    },
    { collection: 'items' }
)
const model = mongoose.model('Item', ItemSchema)
export default model