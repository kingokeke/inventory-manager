import { IProduct } from "@/models/interfaces";

export const calculateDiscount = (product: IProduct, quantity: number) => (
  quantity >= product.discountQty ? (product.price - product.discountPrice) * quantity : 0
);

export const calculateTotal = (product: IProduct, quantity: number) => (
  product.price * quantity - calculateDiscount(product, quantity)
);