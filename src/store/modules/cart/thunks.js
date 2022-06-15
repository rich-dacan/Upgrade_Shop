import { addToCart, removeFromCart } from "./actions";

export const addToCartThunk = ( product ) => {
  
  return ( dispatch, getStore ) => {
    const { cart } = getStore();

    localStorage.setItem('cart', JSON.stringify( [...cart, product] ));

    dispatch( addToCart( product ));
    
  };
};

export const removeFromCartThunk = ( index ) => ( dispatch, getStore ) => {
  const { cart } = getStore();
  const newCart = [...cart]

  newCart.splice(index, 1)
  localStorage.setItem('cart', JSON.stringify( newCart ));

  dispatch( removeFromCart( newCart ));
};

