# rgc-Product-Card

Este es un paquete de prueba de despliegue

## Ruben


### Ejemplo
```
import { } from 'rgc-Product-Card'
```

```
<ProductCard
  product={products[0]}
  initialValues={{
    count: 4,
  }}
>
  {({ count, isMaxCountReached, reset, increaseBy }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>

```