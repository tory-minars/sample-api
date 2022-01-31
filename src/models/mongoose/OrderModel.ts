import mongoose, { Schema } from 'mongoose'

const OrderItemSchema =  new Schema({
   sku: { type: String, required: true },
   quantity: {type: Number, required: true},
   sub_total: { type: Number, required: true }
})

const OrderSchema =  new Schema({
    customer_id: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    status: {type: String, required: true },
    ordered_at: { type: String, required: true },
    completed_at: { type: String, required: false },
    order_items: [OrderItemSchema]
},
{ collection: 'customers' }
)
const model = mongoose.model('Order', OrderSchema)
export default model