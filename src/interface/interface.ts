import { PropsWithChildren } from "react";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";
import { ProductButtonsProps } from "../components/ProductButtons";
export interface Product {
  id: string;
  title: string;
  image?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: PropsWithChildren<ProductCardProps>): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: ({ image, className }: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductIntCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCartHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
