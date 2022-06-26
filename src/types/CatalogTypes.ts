import { doughType } from "./CartTypes";

export interface CatalogItemProps {
  product: {
    variants: {
      visible: boolean;
      variantName: string;
      _id: string;
      price: number;
      weight: number | null;
    }[];
    categoryName: string;
    _id: string;
    categoryId: string;
    name: string;
    image: string;
    description: string;
  };
  onClickAddProduct: (arg0: {
    productId: string;
    variantId: string;
    categoryId: string;
    categoryName: string;
    name: string;
    variantName: string;
    image: string;
    price: number;
    doughType: doughType;
  }) => void;
}
