import IOrder, { IOrderItem } from '../models/IOrder'
import OrderModel from '../models/mongoose/OrderModel'
import { DateTime } from 'luxon'
export default class OrderService {
    
    public calculateTotal = (order: IOrder): number => {
        const items = order.order_items
        const total = items.reduce((acc: number, curr: IOrderItem): number => {
            const subtotal = curr.sub_total
            return acc + subtotal
        }, 0)

        return total
    }

    public newOrder = (order: IOrder): IOrder => {
        order.ordered_at = DateTime.now().toString()
        order.status = 'pending'
        return order
    }

    public completeOrder = (order: any): IOrder => {
        order.completed_at = DateTime.now().toString()
        order.status = 'complete'
        OrderModel.updateOne({_id: order._id}, [
            { $set: { status: "complete", completed_at: DateTime.now().toString() } }
        ]
            )
        
        return order
    }
    
   

}