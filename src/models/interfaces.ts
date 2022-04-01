export interface IOrder {
  name: string;
  price: number;
  quantity: number;
  discount: number;
  total: number;
}

export interface IProduct {
  name: string;
  price: number;
  discountPrice: number;
  discountQty: number;
}