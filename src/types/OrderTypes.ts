interface OrderItem {
  items: [];
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
