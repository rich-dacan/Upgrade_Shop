import React from 'react'
import { useDispatch } from 'react-redux';

import { removeFromCartThunk } from '../../store/modules/cart/thunks';
import { BiTrashAlt }     from 'react-icons/bi';
import { CardCart }       from './styles'
import { toast }          from 'react-toastify';

export default function CartProd({ product, index }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch( removeFromCartThunk( index ));
    toast.success('Produto Removido com Sucesso!')
  }
  const { name, price, image } = product;

  return (
    <CardCart>
      <img src={image} alt="image_product"/>
      <h3> {name} </h3>
      <p> {price.toFixed(2).replace('.', ',')} $ </p>
      <button onClick={removeFromCart}> 
        <BiTrashAlt/> 
      </button>
    </CardCart>
  )
};
