import React from 'react';
import { useSelector } from "react-redux";

import { ContainerCard, ContainerCart } from './styles';
import { BsCartCheck }  from 'react-icons/bs'
import CartProd         from '../CartProd';

import { v4 as uuidv4 } from 'uuid';

export default function Cart() {

  const cart = useSelector(({ cart }) => cart );

  return (

    <ContainerCart>

      <span>
        <h1> My Cart </h1>
        <BsCartCheck/>
      </span>

      {cart.map(( product, index ) => (

        <ContainerCard key={index}>
          <CartProd index={uuidv4()} product={product} />
          {console.log(index)}
        </ContainerCard>

      ))}

        <div className='total'>
          <h1> Summary: </h1>
          <span className='total__price'>
              { cart.reduce((acc, cur) => {
                  return cur.price + acc;
                }, 0).toFixed(2).replace('.', ',')
              } $
            <button className='btn__checkout'> Checkout </button>
          </span>
        </div>

    </ContainerCart>
  );
};

