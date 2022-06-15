import React            from 'react';
import { useSelector }  from "react-redux";

import { Container }    from './styles';
import Product          from '../Product';

export default function Showcase() {

  const products = useSelector(({ products }) => products );

  return (
    <Container>

      {products.map(( product, index ) => (

          <Product key={product.id} index={index} product={product}/>
      ))}

    </Container>
  );
};
