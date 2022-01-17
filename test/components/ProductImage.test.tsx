import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('debe mostrar el componente correctamente con la imagen personalizada', () => {
    const wrapper = renderer
      .create(
        <ProductImage
          image="https://picsum.photos/200"
          className="custom-class"
        />
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el component con la imagen del product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
