import React, { useContext, CSSProperties } from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface ProductImageProps {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({
  image,
  className,
  style,
}: ProductImageProps) => {
  const { product } = useContext(ProductContext);

  let imgToShow: string;

  if (image) {
    imgToShow = image;
  } else if (product?.image) {
    imgToShow = product?.image;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt="Product"
      style={style}
    />
  );
};
