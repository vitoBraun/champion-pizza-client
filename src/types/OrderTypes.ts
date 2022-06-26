import { doughType } from "./CartTypes";

interface OrderItem {
  id: string;
  items: OrderVariantItem[];
  thinCount: number;
  thinTotalPrice: number;
  totalPrice: number;
  traditionCount: number;
  traditionTotalPrice: number;
}

interface OrderVariantItem {
  categoryId?: string;
  categoryName: string;
  dough: doughType;
  image: string;
  name: string;
  price: number;
  productId: string;
  variantId: string;
  variantName: string;
}

export interface OrderObj {
  totalPrice: number;
  totalCount: number;
  items: OrderItem[];
}

export interface Customer {
  name: string;
  address: string;
  comment?: string;
  phone: string;
  orderType: "Самовывоз" | "Доставка";
}
