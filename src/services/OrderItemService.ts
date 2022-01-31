import IOrder, { IOrderItem } from '../models/IOrder'
import IItem, { IPromotion } from '../models/IItem'

export default class OrderItemService {
    private getItemPrice = (order: IOrder, item: IItem): number => {
        if(!item.promotions) {
             return item.default_price
        }
        const promotion: IPromotion = item.promotions.find((promo: IPromotion): boolean => {
            const item = order.order_items.find(item => item.sku === promo.sku)
            return promo.sku === item.sku
        })

        if(!promotion) {
            return item.default_price
       }

       return promotion.price
    }
}