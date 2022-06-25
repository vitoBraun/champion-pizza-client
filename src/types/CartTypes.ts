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
  onRemove: ({ variantId, doughType }: CartAction) => void;
  onPlus: ({ variantId, doughType }: CartAction) => void;
  onMinus: ({ variantId, doughType }: CartAction) => void;
  categoryName: string;
}
