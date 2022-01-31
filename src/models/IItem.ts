export default interface IItem {
    name: string;
    sku: string;
    description: string;
    default_price: number;
    tax: number;
    count: number;
    promotions?: IPromotion[];
}

export interface IPromotion {
    sku: string;
    price: number;
}