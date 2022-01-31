import { EventEmitter } from 'events'
import OrderService from '../services/OrderService'
import IOrder from '../models/IOrder'

export const OrderEmitter = new EventEmitter()
const os = new OrderService()

OrderEmitter.on('completeOrder', async (completeOrder: IOrder) => {
   await setTimeout(() => {
        const order = os.completeOrder(completeOrder)
        console.log('order complete', order)
    }, 7000)
})