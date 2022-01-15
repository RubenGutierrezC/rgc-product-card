import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';
import { ProductImage } from '../src/components/ProductImage';
import { ProductTitle } from '../src/components/ProductTitle';
import { ProductButtons } from '../src/components/ProductButtons';

const product = {
  id: '1',
  title: 'title',
};

const App = () => {
  return (
    <ProductCard
      product={product}
      initialValues={{
        count: 4,
      }}
    >
      {({ count, isMaxCountReached, reset, increaseBy, maxCount }) => (
        <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </>
      )}
    </ProductCard>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
