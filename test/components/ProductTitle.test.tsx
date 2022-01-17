import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('debe mostrar el componente correctamente con el titulo personalizdos', () => {
    const wrapper = renderer
      .create(<ProductTitle title="Custom Product" className="custom-class" />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  test('debe de mostrar el component con el nombre del product', () => {
    const wrapper = renderer
      .create(
        <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
