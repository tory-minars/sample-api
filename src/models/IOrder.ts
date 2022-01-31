export default interface IOrder {
    customer_id: string;
    status?: string;
    ordered_at?: string;
    completed_at?: string;
    total?: number;
    order_items: IOrderItem[]
}

export interface IOrderItem {
    sku: string;
    quantity: number;
    sub_total: number;
}
