export type doughType = "Традиционное" | "Тонкое" | null;

export interface CartAction {
  variantId: string;
  doughType: doughType;
}

export interface CartItemProps {
  key: string;
  variantId: string;
  name: string;
  variantName: string;
  image: string;
  price: number;
  doughType: doughType;
  totalItemPrice: number;
  totalItemCount: number;
  onRemove: (
    variantId: CartItemProps["variantId"],
    doughType: CartItemProps["doughType"]
  ) => {};
  onPlus: (
    variantId: CartItemProps["variantId"],
    doughType: CartItemProps["doughType"]
  ) => {};
  onMinus: (
    variantId: CartItemProps["variantId"],
    doughType: CartItemProps["doughType"]
  ) => {};
  categoryName: string;
}
