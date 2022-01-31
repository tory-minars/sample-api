import mongoose from 'mongoose'

const CustomerSchema = new mongoose.Schema(
    {
        first_name: { type: String, required: true},
        last_name: {type: String, required: true },
        phone: { type: String, required: true },
    },
    { collection: 'customers' }
)
const model = mongoose.model('Customer', CustomerSchema)
export default model