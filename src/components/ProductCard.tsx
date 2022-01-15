import React, { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import { InitialValues, ProductCartHandlers } from '../interface/interface';
import {
  ProductContextProps,
  Product,
  OnChangeArgs,
} from '../interface/interface';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  className?: string;
  style?: CSSProperties;
  onChange?: (arg: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
  children?: (args: ProductCartHandlers) => JSX.Element;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ product, increaseBy, counter, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children &&
          children({
            count: counter,
            maxCount,
            isMaxCountReached,
            reset,
            product,
            increaseBy,
          })}
      </div>
    </Provider>
  );
};
