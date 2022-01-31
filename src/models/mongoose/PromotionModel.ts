import mongoose, { Schema } from 'mongoose'

const PromoItemSchema =  new Schema({
   sku: { type: String, required: true },
   price: { type: Number, required: true },
   tax: { type: Number, required: true },
   promo_group: { type: Number, required: true }
})

const PromotionSchema =  new Schema({
    name: { type: String, required: true },
    status: {type: String, required: true },
    starts_at: { type: String, required: true },
    ends_at: { type: String, required: true },
    description: { type: String, required: false },
    items: [PromoItemSchema]
},
{ collection: 'promotions' }
)
const model = mongoose.model('Promotion', PromotionSchema)
export default model