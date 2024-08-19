import {Product} from "./product.model";

export class Cart {
  id!: string;
  totalPrice!: string;
  items!: Item[];
}

export class Item {
  quantity!: number;
  basePrice!: number;
  totalPrice!: number;
  product!: Product;
}
