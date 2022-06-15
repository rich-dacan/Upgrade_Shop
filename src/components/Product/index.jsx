import React           from 'react';
import { useDispatch } from "react-redux";

import { addToCartThunk } from '../../store/modules/cart/thunks';
import { BsCartPlus }     from 'react-icons/bs';
import { toast }          from 'react-toastify';
import { Card }           from './styles';

export default function Product({ product, index }) {

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch( addToCartThunk( product ));
    toast.success('Produto Adicionado com Sucesso!');
  }

  const { name, price, image } = product;

  return (
    <Card>
      <h3> {name} </h3>
      <img src={image} alt="image_product" />
      <p> {price.toFixed(2).replace('.', ',')} $ </p>
      <span>
        <button onClick={addToCart}>
          Add to cart
        </button>
        <BsCartPlus/>
      </span>
    </Card>
  );
};
