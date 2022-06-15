import React           from 'react'
import { useSelector } from 'react-redux';

import { CartEmpty } from './styles';
import { BiSad }     from 'react-icons/bi';
import { motion }    from 'framer-motion';

import Header from '../../components/Header';
import Cart   from '../../components/Cart';

export default function PageCart() {

  const cart = useSelector(({ cart }) => cart );

  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    >
      <Header cartStatus/>

      { cart.length > 0 ? 

        <Cart/>  
      : 
        <CartEmpty>
          <h1> Cart Empty... <BiSad/></h1>
          <p> Add products and they will appear here </p>
          
        </CartEmpty>
      }
    </motion.div>
  );
};
