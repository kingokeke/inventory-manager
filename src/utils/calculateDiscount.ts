import { IProduct } from "@/models/interfaces";

export const calculateDiscount = (product: IProduct, quantity: number) => (
  quantity >= product.discountQty ? (product.price - product.discountPrice) * quantity : 0
);
